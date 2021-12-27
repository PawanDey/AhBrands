import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
  Alert, 
  DevSettings
} from 'react-native';
import { Divider } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
// import { useNavigation } from '@react-navigation/native';


const CustomSidebarMenu = (props) => {

  // const navigation = useNavigation();
  const BASE_PATH =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/';
  const proileImage = 'react_logo.png';

  const removeItem = async () => {
    try {
      await AsyncStorage.removeItem('token');
      
      const isInstalledVal =  await AsyncStorage.getItem('newApp')
      const isLoggedInVal  =  await AsyncStorage.getItem('token')

      console.log("newApp(CSM)-",isInstalledVal);
      console.log("loggedIn(CSM)-",isLoggedInVal);

      Alert.alert("token"+isLoggedInVal,"newApp"+isInstalledVal);
     
      
   } catch (exception) {
      return false;
   }
  }
  

  return (
    <SafeAreaView style={{flex: 1}}>
      <Image
        // source={{uri: BASE_PATH + proileImage}}
        source={require('../assets/enklycalogo1.png')}
        style={styles.sideMenuProfileIcon}
      />
      <Divider style={styles.divider}/>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />

        <DrawerItem label="Visit Us" onPress={() => Linking.openURL('https://ahbrands.com/')}/>

        {/* <DrawerItem label="Logout" onPress={() => props.navigation.navigate("Profile")} /> */}
        <DrawerItem label="Logout" onPress={() => removeItem()} />
        {/* <DrawerItem label="Category" onPress={() => navigation.navigate('Category')} /> */}
      </DrawerContentScrollView>
      <Divider style={styles.divider}/>
      <Text
        style={{
          fontSize: 14,
          textAlign: 'center',
          color: 'grey',
          paddingVertical:10,
        }}>
       Version - 1.0.0
      </Text>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 228,
    height: 80,
    marginVertical:20,
    alignSelf: 'center',
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  divider:{
    height:1,
    width:"80%",
    alignSelf:'center'
  }
});

export default CustomSidebarMenu;