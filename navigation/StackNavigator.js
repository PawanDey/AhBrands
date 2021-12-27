// ./navigation/StackNavigator.js

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerNavigator from "./DrawerNavigator";
import {TabViewExample} from '../src/screens'
import Profile from "../src/screens/ProfileDetailPage";

const Stack = createStackNavigator();
const StackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Dashboard"
          component={DrawerNavigator}
          options={{
            title: 'Main',
            headerStyle: {
              backgroundColor: '#09f',
            },
          }}/>

      </Stack.Navigator>
    );
  };
export default StackNavigator;