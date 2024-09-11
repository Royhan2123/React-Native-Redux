/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {StyleSheet, Text, View} from 'react-native';
import {Image} from 'react-native';

const HomeScreen = () => {
  return (
    <View style={style.container}>
      <View style={style.rowContainer}>
        <View>
          <Text style={{color: 'black', fontSize: 16}}>Hello</Text>
          <Text style={style.texts}>Royhan</Text>
          <Text style={{color: 'grey', fontSize: 16}}>How are you today?</Text>
        </View>
        <Image
          source={{
            uri: 'https://i.pinimg.com/564x/77/3d/e8/773de85e694e8f88ed08ff5509ae4355.jpg',
          }}
          style={style.image}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: 65,
    height: 65,
    borderRadius: 65 / 2,
    elevation: 1,
  },
  texts: {
    fontSize: 18,
    color: 'black',
  },
});

export default HomeScreen;
