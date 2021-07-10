import * as React from 'react';
import { StyleSheet, TextInput, Button, Image, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Text, View } from '../components/Themed';

export default function SearchResultsScreen({route, navigation}) {
  const { recipient, items, user, accessToken } = route.params;

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
    <View style={styles.row}>
      <Text style={styles.text}>Results for {JSON.stringify(recipient)}...</Text>
      <Button 
        title="Pin this search"
        onPress={() => navigation.navigate('Home', {
          pinned: items,
          user: user,
          accessToken: accessToken
        })}  
      />
    </View>
        <View style={styles.resultsContainer}>
          {items.map(item => 
            items.length > 0 ?
              <TouchableOpacity key={item.key} style={styles.cardContainer} onPress={() => navigation.navigate('ItemDetails', {
                  item: item,
                  user: user,
                  accessToken: accessToken
                })}>
                    <Text style={styles.text}>{item.name}</Text>
                    <View style={styles.imageContainer}>
                        <Image
                            style={styles.image}
                            source={item.image}
                        />
                    </View>
                </TouchableOpacity>
            :
            <Text>No matching results</Text>
          )}
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingRight: 15,
    paddingLeft: 15
  },
  text: {
      padding: 10,
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 10
  },
  resultsContainer: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap'
  },
  cardContainer: {
      backgroundColor: '#fff',
      height: 115,
      width: '30%',
      elevation: 5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 1,
      marginHorizontal: 5,
      marginBottom: 10
  },
  image: {
      height: 65,
      width: '100%',
      resizeMode: 'contain'
  }
});
