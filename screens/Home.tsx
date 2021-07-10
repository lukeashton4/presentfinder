import * as React from 'react';
import { StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Text, View } from '../components/Themed';

export default function TabOneScreen({navigation, route}) {
  const { user, accessToken, pinned } = route.params;
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
      headerLeft: null
    });
  }, [navigation]);

    return (
    <View style={styles.container}>
      <Text>Welcome {user.name}!</Text>
      <View style={styles.resultsContainer}>
          {pinned != null ?
            pinned.map(item => 
                <TouchableOpacity key={item.key} style={styles.cardContainer} onPress={() => navigation.navigate('ItemDetails', {
                    item: item
                  })}>
                      <Text style={styles.text}>{item.name}</Text>
                      <View style={styles.imageContainer}>
                          <Image
                              style={styles.image}
                              source={item.image}
                          />
                      </View>
                  </TouchableOpacity>
            )
            :
            <Text>You have no pinned searches. To pin a search, please go to the Search page.</Text>
          }
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 15
  },
  pinnedContainer: {

  }
});
