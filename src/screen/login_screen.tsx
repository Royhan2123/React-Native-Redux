import {StyleSheet, Text, View} from 'react-native';

const LoginScreen = () => {
  return <View style={style.container}>
    <Text>Login Your Account</Text>
  </View>;
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});

export default LoginScreen;
