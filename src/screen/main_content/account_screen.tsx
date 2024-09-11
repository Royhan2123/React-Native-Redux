/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import { CommonActions, useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const AccountScreen = () => {
    const navigation = useNavigation();
    return(
        <View style={style.container}>
           <TouchableOpacity onPress={() => {
            navigation.dispatch((
                CommonActions.reset({
                    index: 0,
                    routes: [{name: 'LoginScreen'}],
                })
            ));
           }} style={style.button}>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Text style={style.texts}>Logout</Text>
            </View>
           </TouchableOpacity>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: 120,
        height: 45,
        backgroundColor: 'blue',
        borderRadius: 15,
        justifyContent: 'center',
        elevation: 1,
    },
    texts: {
        color: 'white',
        fontSize: 13,
    },
});

export default AccountScreen;
