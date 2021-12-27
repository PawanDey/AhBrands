import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function Logo() {
  return <Image source={require('../assets/enklogo.png')} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    width: 249/2,
    height: 99/2,
    marginVertical:20,
    alignSelf:'center',
  },
})
