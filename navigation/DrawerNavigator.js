// ./navigation/DrawerNavigator.js
import React from "react";
import {View, TouchableOpacity, Image,StyleSheet, DevSettings} from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView,DrawerItemList,DrawerItem } from "@react-navigation/drawer";
import { Ionicons } from '@expo/vector-icons';
import { Icon } from 'react-native-elements';
import { theme } from "../src/core/theme";
import CustomSidebarMenu from '../src/components/CustomSidebarMenu';
import TabViewExample from "../src/screens/TabViewExample";
import CategoryView from "../src/screens/CategoryView";
import AllProductsView from "../src/screens/AllProductsView";
import ProductDeatil from "../src/screens/ProductDeatilPage";
import Profile from "../src/screens/ProfileDetailPage";
import PrivacyPolicy from "../src/screens/PrivacyPolicy";
import Cart from "../src/screens/CartView";
import Checkout from '../src/screens/Checkout';
import MyOrder from '../src/screens/MyOrder';
import CategoryWiseProducts from "../src/screens/CategoryWiseProducts";
import { useNavigation } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const DrawerNavigator = (props) => {
  const navigation = useNavigation();
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };

  const openCart=()=>{
    // alert("Clicked")
    navigation.navigate('My Cart')
  }
  
  return (
    <Drawer.Navigator screenOptions={{headerShown: true}}
    // Here we are setting our custom sidebar menu
    drawerContent={(props) => <CustomSidebarMenu {...props} />}>

      <Drawer.Screen name="Home" component={TabViewExample} options={{
        drawerIcon: ({focused, size}) => (
            <Ionicons
              name="md-home"
              size={14}
              color={focused ? theme.colors.primary : '#ccc'}
            />
        ),

        headerRight: () => (
          <TouchableOpacity onPress={()=>openCart()}
            style={{backgroundColor: 'transparent'}}>
              <Ionicons
                      name="cart"
                      size={28}
                      color={theme.colors.primary}
                      style={styles.toolbaricon}
                    />
          </TouchableOpacity>
        ),
      }}
      />

    <Drawer.Screen name="My Cart" component={Cart} options={{
            headerRight: () => (
              <TouchableOpacity  onPress={()=>openCart()}
                style={{backgroundColor: 'transparent'}}>
                    <Ionicons
                          name="cart"
                          size={28}
                          color={theme.colors.primary}
                          style={styles.toolbaricon}
                        />
              </TouchableOpacity>
            ), 
          }} />
      <Drawer.Screen name="Checkout" component={Checkout} options={{
              headerRight: ()=>(
                <TouchableOpacity onPress={()=>openCard()}
                  style={{backgroundColor:'transparent'}} >
                    <Ionicons
                          name="cart"
                          size={28}
                          color={theme.colors.primary}
                          style={styles.toolbaricon}
                        />
                </TouchableOpacity>
              )

      }} />
      <Drawer.Screen name="MyOrder" component={MyOrder} options={{
              headerRight: ()=>(
                <TouchableOpacity onPress={()=>openCard()}
                  style={{backgroundColor:'transparent'}} >
                    <Ionicons
                          name="cart"
                          size={28}
                          color={theme.colors.primary}
                          style={styles.toolbaricon}
                        />
                </TouchableOpacity>
              )

      }} />

      <Drawer.Screen name="Category" component={CategoryView} options={{
        headerRight: () => (
          <TouchableOpacity  onPress={()=>openCart()}
            style={{backgroundColor: 'transparent'}}>
               <Ionicons
                      name="cart"
                      size={28}
                      color={theme.colors.primary}
                      style={styles.toolbaricon}
                    />
          </TouchableOpacity>
        ), 
      }} />

  <Drawer.Screen name="All Products" component={AllProductsView} options={{
        headerRight: () => (
          <TouchableOpacity onPress={()=>openCart()}
            style={{backgroundColor: 'transparent'}}>
               <Ionicons
                      name="cart"
                      size={28}
                      color={theme.colors.primary}
                      style={styles.toolbaricon}
                    />
          </TouchableOpacity>
        ), 
      }} />

<Drawer.Screen name="Category Wise Products" component={CategoryWiseProducts} options={{
        headerRight: () => (
          <TouchableOpacity onPress={()=>openCart()}
            style={{backgroundColor: 'transparent'}}>
               <Ionicons
                      name="cart"
                      size={28}
                      color={theme.colors.primary}
                      style={styles.toolbaricon}
                    />
          </TouchableOpacity>
        ), 
      }} />

  <Drawer.Screen name="Products Details" component={ProductDeatil} options={{
        headerRight: () => (
          <TouchableOpacity onPress={()=>openCart()}
            style={{backgroundColor: 'transparent'}}>
                <Ionicons
                      name="cart"
                      size={28}
                      color={theme.colors.primary}
                      style={styles.toolbaricon}
                    />
          </TouchableOpacity>
        ), 
      }} />

<Drawer.Screen name="Profile" component={Profile} options={{
        headerShown:true,
        headerRight: () => (
          <TouchableOpacity onPress={()=>openCart()}
            style={{backgroundColor: 'transparent'}}>
                <Ionicons
                      name="cart"
                      size={28}
                      color={theme.colors.primary}
                      style={styles.toolbaricon}
                    />
          </TouchableOpacity>
        ), 
      }} />

<Drawer.Screen name="Privacy Policy" component={PrivacyPolicy} options={{
        headerRight: () => (
          <TouchableOpacity onPress={()=>openCart()}
            style={{backgroundColor: 'transparent'}}>
                <Ionicons
                      name="cart"
                      size={28}
                      color={theme.colors.primary}
                      style={styles.toolbaricon}
                    />
          </TouchableOpacity>
        ), 
      }} />

    </Drawer.Navigator>
  );
};


const styles = StyleSheet.create({
  toolbaricon: {
    alignSelf:'center',
    marginRight:14,
  }
});

export default DrawerNavigator;