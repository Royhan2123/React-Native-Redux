import {CommonActions, useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Image, StyleSheet, View} from 'react-native';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'LoginScreen'}],
        }),
      );
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [navigation]);

  return (
    <View style={style.container}>
      <Image
        source={{
          uri: 'https://firebase.google.com/static/images/brand-guidelines/logo-vertical.png',
        }}
        style={style.images}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  images: {
    width: 200,
    height: 200,
  },
});

export default SplashScreen;
