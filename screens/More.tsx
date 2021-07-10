import * as React from 'react';
import { StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Text, View } from '../components/Themed';

export default function TabFiveScreen({navigation, route}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{flexDirection: 'row'}}>
          <Icon
            name="user"
            size={30}
            onPress={() => navigation.navigate('Profile', {params: navigation})}
            style={{paddingRight: 15}}
          />
          <Icon
            name="cog"
            size={30}
            onPress={() => navigation.navigate('Settings', {params: navigation})}
            style={{paddingRight: 20}}
          />
        </View> 
      ),
      headerLeft: null
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>More</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
