import * as React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Session = {
    storeData,
    getData
}

async function storeData(value) {
try {
    await AsyncStorage.setItem('id', value)
} catch (e) {
    // saving error
}
}

async function getData(){
try {
    const value = await AsyncStorage.getItem('id')
    if(value !== null) {
        return value;
    }
} catch(e) {
    // error reading value
}
}
      
