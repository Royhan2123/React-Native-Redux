import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB7tMyT29loFATkRefG__ofoq62JuX8sxw',
  authDomain: 'app-react-native-a7846.firebaseapp.com',
  projectId: 'app-react-native-a7846',
  storageBucket: 'app-react-native-a7846.appspot.com',
  messagingSenderId: '1037300202157',
  appId: '1:1037300202157:android:c1061793c3a449c468a424',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };
