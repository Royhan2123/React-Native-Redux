/* eslint-disable react/react-in-jsx-scope */
import { StyleSheet, Text, View } from 'react-native';

const SearchScreen = () => {
    return(
        <View style={style.container}>
            <Text>
                Ini Search Screen
            </Text>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default SearchScreen;
