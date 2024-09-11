/* eslint-disable react/react-in-jsx-scope */
import { StyleSheet, Text, View } from 'react-native';

const AccountScreen = () => {
    return(
        <View style={style.container}>
            <Text>
                Ini Account Screen
            </Text>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default AccountScreen;
