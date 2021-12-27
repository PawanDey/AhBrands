import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator';    // For HomePage
import ProductDetail from './src/screens/ProductDeatilPage';
import CartView from './src/screens/CartView';
import Profile from './src/screens/ProfileDetailPage';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import ResetPasswordScreen from './src/screens/ResetPasswordScreen';
import AllProductsView from './src/screens/AllProductsView';
import CategoryWiseProducts from './src/screens/CategoryWiseProducts';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoryView from './src/screens/CategoryView';
import { TabViewExample } from './src/screens';
import DrawerNavigator from './navigation/DrawerNavigator';
import CustomSidebarMenu from './src/components/CustomSidebarMenu';


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <DrawerNavigator/>
     </NavigationContainer>


//  <NavigationContainer >
//     <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
//       <Stack.Screen name="Home" component={DrawerNavigator} />
//       <Stack.Screen name="CategoryWiseProducts" component={CategoryWiseProducts} />
//       <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
//       <Stack.Screen name="TabViewExample" component={TabViewExample} />
//       <Stack.Screen name="AllProductsView" component={AllProductsView} />
//       <Stack.Screen name="StackNavigator" component={StackNavigator} />
//     </Stack.Navigator>
// </NavigationContainer> 


    // <NavigationContainer>
    //   <Drawer.Navigator initialRouteName="Home" screenOptions={{headerShown: true}}
    //     drawerContent={(props) => <CustomSidebarMenu {...props} />}
    //    >
    //     <Drawer.Screen name="Home" component={DrawerNavigator} />
    //     {/* <Drawer.Screen name="CategoryWiseProducts" component={CategoryWiseProducts} />
    //     <Drawer.Screen name="AllProductsView" component={AllProductsView} />
    //     <Drawer.Screen name="CategoryView" component={CategoryView} /> */}
    //   </Drawer.Navigator>
    // </NavigationContainer>

  );
}