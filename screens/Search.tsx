import * as React from 'react';
import { StyleSheet, TextInput, Button, Alert, Picker } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Text, View } from '../components/Themed';
import { Items } from '../constants/Items';

export default function TabTwoScreen({navigation, route}) {
  const { user, accessToken } = route.params;
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

  const [recipient, onChangeRecipient] = React.useState("");
  const [age, onChangeAge] = React.useState("");
  const [gender, onChangeGender] = React.useState("");
  const [interests, onChangeInterests] = React.useState("");
  const [hobbies, onChangeHobbies] = React.useState("");
  const [categories, onChangeCategories] = React.useState("");
  const [priceRangeLower, onChangePriceRangeLower] = React.useState("");
  const [priceRangeHigher, onChangePriceRangeHigher] = React.useState("");


  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInputHandler label="Recipient" value={recipient} onChange={onChangeRecipient} />
        <TextInputHandler label="Age" value={age} onChange={onChangeAge} />
        <PickerHandler label="Gender" value={gender} onChange={onChangeGender} itemList={genders} />
        <TextInputHandler label="Interests" value={interests} onChange={onChangeInterests} />
        <TextInputHandler label="Categories" value={categories} onChange={onChangeCategories} />
        <View style={styles.rowContainer}>
          <Text style={styles.text}>Price Range   £</Text>
          <TextInput
            defaultValue={priceRangeLower}
            style={styles.textInput}
            onChangeText={(itemValue, itemIndex) => onChangePriceRangeLower(itemValue)}
          />
          <Text style={{width: 40}}>  to  £</Text>
          <TextInput
            defaultValue={priceRangeHigher}
            style={styles.textInput}
            onChangeText={(itemValue, itemIndex) => onChangePriceRangeHigher(itemValue)}
          />
        </View>
        <View style={styles.button}>
          <Button 
            title="Search"
            onPress={() => getResults(navigation, recipient, age, gender, interests, categories, priceRangeLower, priceRangeHigher, user, accessToken)}
          />
        </View>
      </View>
    </View>
  );
}

const TextInputHandler = ({label, value, onChange}) => {
  return (
    <View style={styles.rowContainer}>
      <Text style={styles.text}>{label}</Text>
      <TextInput
        defaultValue={value}
        style={styles.textInput}
        onChangeText={(itemValue, itemIndex) => onChange(itemValue)}
      />
    </View>
  );
}

const PickerHandler = ({label, value, onChange, itemList}) => {
  return (
    <View style={styles.rowContainer}>
      <Text style={styles.text}>{label}</Text>
      <Picker
        defaultValue={'any'}
        selectedValue={value}
        style={styles.textInput}
        onValueChange={(itemValue, itemIndex) => onChange(itemValue)}
      >
         {itemList.genders.map(item => <Picker.Item key={item.key} label={item.name} value={item.value}/>)}
      </Picker>
    </View>
  );
}

function getResults(navigation, recipient, age, gender, interests, categories, priceRangeLower, priceRangeHigher, user, accessToken) {
  var results = [];
  var index = Items.length-1;
  while (index >= 0) {
    if (
      ((Items[index].ageRange[0] <= parseInt(age) && parseInt(age) <= Items[index].ageRange[1]) || age == "")
      && (Items[index].gender == gender || Items[index].gender == 'any' || gender == 'any')
      && ((interests == Items[index].interests) || interests == "")
      && ((categories == Items[index].categories) || categories == "")
      && ((parseInt(priceRangeLower) <= Items[index].price && Items[index].price <= parseInt(priceRangeHigher)) || (priceRangeLower == "" && priceRangeHigher == ""))
    ) {
      results.push(Items[index]);
    }
      index -= 1;
  }

  navigation.navigate('SearchResults', {
    recipient: recipient, 
    items: results,
    user: user,
    accessToken: accessToken
  });
}

const genders = {
  genders: [
    {
      key: 1,
      name: 'Please Select',
      value: 'any'
    },
    {
      key: 2,
      name: 'Male',
      value: 'male'
    },
    {
      key: 3,
      name: 'Female',
      value: 'female'
    },
    {
      key: 4,
      name: 'Other',
      value: 'any'
    }
  ] 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingRight: 20,
    paddingLeft: 20
  },
  form: {
    width: '100%',
    height: 500
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  rowContainer: {
    flex: 1, 
    flexDirection: "row",
    alignItems: "center"
  },
  text: {
    width: 100
  },
  textInput: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    height: 40,
    padding: 10,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
  }
});
