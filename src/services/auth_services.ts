import auth from '@react-native-firebase/auth';
import { RegisterModels } from '../models/register_models';
import { UserModels } from '../models/user_models';
import { getFirestore } from '@react-native-firebase/firestore';
import { LoginModels } from '../models/login_models';

export const Register = async (data: RegisterModels): Promise<UserModels | string> => {
    try {
        const { name, email, password } = data;

        const userCredential = await auth().createUserWithEmailAndPassword(email!, password!);
        const user: UserModels = {
            username: name,
            email: email,
            jurusan: null,
            universitas: null,
        };
        await getFirestore().collection('user').doc(userCredential.user.uid!).set(user);
        return user;

    } catch (error) {
        throw error;
    }
};

export const Login = async   (data: LoginModels): Promise<UserModels | string> => {
    try {
        const {email, password} = data;

        const userCreditial = await auth().signInWithEmailAndPassword(email!,password!);

        const userDoc = await getFirestore().collection('user').doc(userCreditial.user.uid!).get();

        if (!userDoc.exists) {
            throw new Error('User not found in Firestore');
        }

        return userDoc.data() as UserModels;
    } catch (error) {
        throw new Error('Error this message ${error}');
    }
};

export const Logout =  async (): Promise<void> => {
    try {
       await auth() .signOut();
    } catch (error) {
        throw error;
    }
};
