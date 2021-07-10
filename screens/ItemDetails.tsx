import * as React from 'react';
import { StyleSheet, TextInput, Button, Image, Linking } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Text, View } from '../components/Themed';

export default function ItemDetailsScreen({route,navigation}) {
  const { item, user, accessToken } = route.params;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{flexDirection: 'row'}}>
          <Icon
            name="user"
            size={30}
            onPress={() => navigation.navigate('Profile', {params: navigation, user, accessToken})}
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
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
        <View style={styles.itemContainer}>
          <View style={styles.row}> 
            <Text style={styles.title}>{item.name}</Text>
            <Icon
              name="heart-o"
              size={30}
              style={{marginLeft: 'auto'}}
            />
          </View>
          <Text style={{fontSize: 20}}>£{item.price}</Text>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={item.image}
                />
            </View>
            <Text style={styles.description}>
            {item.desc}
            </Text>
            <Button 
                title="Buy Now"
                onPress={ ()=>{ Linking.openURL(item.url)}}
            />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  title: {
      fontSize: 25
  },
  itemContainer: {
      elevation: 5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 1,
      width: '100%',
      padding: 10,
      height: '100%'
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  image: {
      resizeMode: 'contain',
      width: '100%',
      height: '100%'
  },
  description: {

  },
  row: {
    flexDirection: 'row'
  }
});
