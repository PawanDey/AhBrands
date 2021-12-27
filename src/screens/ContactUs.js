import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity,KeyboardAvoidingView,Platform,Linking } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import { theme } from '../core/theme'


export default function ContactUs({ navigation }) {
  
  return (
    <KeyboardAvoidingView
    behavior = { Platform.OS === "ios" ? "padding" : "height"}
    enabled={false}
    style={styles.container}>
    <Background>
      {/* <BackButton goBack={navigation.goBack} /> */}
      <Logo />
      <Text style={styles.header}>Contact Us</Text>
      <Text style={styles.topic}>Retailer support business hours</Text> 
      <Text style={styles.value}>(Mon - Sun 9 am to 6 pm PST) </Text>

      <Text style={styles.topic}>Call Retailer support</Text> 
      <Text style={styles.value}>+1 (213) 213 5880 </Text>
      
      <Text style={styles.topic}>Email us</Text> 
      <Text style={styles.value}>cs@enkwirelessinc.com </Text>

      <Text style={styles.topic}>Sales Representative</Text> 
      <Text style={styles.value}>Keerthi </Text>

      <Text style={styles.topic}>Call Sales Representative</Text> 
      <Text style={styles.value}>6193257479 </Text>

      <Text style={styles.topic}>Email sales representative</Text> 
      <Text style={styles.value}>abhiraj.s@virtuzo.in </Text>
    
    </Background>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  container:{
    flex: 1,
    backgroundColor:'#fff',
  },
  topic:{
    fontWeight: 'bold',
    color: theme.colors.primary,
    fontSize:16,
  },
  value:{
     marginBottom:15, 
  },
  header:{
    fontWeight: 'bold',
    color: theme.colors.primary,
    fontSize:24,
    marginBottom:40
  }
})
