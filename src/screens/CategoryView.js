import React, { Component,useState,useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import TextTicker from 'react-native-text-ticker';
import FixedStatusBar from '../components/StatusBar';
import { theme } from '../core/theme';
import ImageSlider from 'react-native-image-slider';   
import { apiService } from '../services/api.services';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoryWiseProducts from './CategoryWiseProducts';
import { useNavigation } from '@react-navigation/native';

const {height, width} = Dimensions.get('window');
const itemWidth = (width - 15) / 2;


export default function CategoryView() {
  
const [dataSource, setDataSource] = useState([]);
const [product_gallery, setProduct_gallery] = useState([]);
const navigation = useNavigation();

useEffect(() => {
  apiService.getCategory().then(data => {
    console.log("getCategory-",data);
    setDataSource(data);
  },
  error => {
    console.log(error);

  })
  }, []);

    return (
        <SafeAreaView style={styles.container}>
          <FixedStatusBar backgroundColor={theme.colors.primary} barStyle="light-content"/>
          <ImageSlider 
                  images={product_gallery}
                  autoPlayWithInterval={3000}  
                  customSlide={({ index, item, style, width }) => (
                    // It's important to put style here because it's got offset inside
                    <View key={index} style={[style, styles.customSlide]}>
                      <Image source={{ uri: item }} style={styles.customImage} />
                    </View>
                  )}  /> 

            <FlatList 
                data={dataSource}
                renderItem={({item}) => (
                
                <TouchableOpacity  
                    style={{
                    flex: 1,
                    }}  onPress={() => 
                      // alert('You Pressed: '+item.category_id)
                      navigation.navigate('Category Wise Products',{id:item.category_id})
                    }>
                    <View style={styles.card}>
                        <Image
                        style={styles.tilesimage}
                        source={{uri: item.category_image}} />
                         {/* source={{uri: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'}}/>  */}
                        <Text numberOfLines={2} ellipsizeMode='tail' style={styles.titleStyle}>
                           {item.category_name}
                        </Text>            
                        {/* <TextTicker
                          style={{ fontSize: 14 , color:'#00f'}}
                          duration={8000}
                          loop
                          bounce
                          repeatSpacer={20}
                          marqueeDelay={1000}>
                            {item.category_name}
                          </TextTicker>   */}
                    </View>
                </TouchableOpacity>)}
            
                //Setting the number of column
                numColumns={2}
                keyExtractor={(item) => item.category_id}
            />
            </SafeAreaView>
        );
    }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f6faff',
  },

  tilesimage: {
    height: 100,
    width:100,
  },
  titleStyle: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight:'700',
    color:theme.colors.text,
    marginTop:10,
  },
  titleStyle2: {
    textAlign: 'center',
    fontSize: 14,
    marginTop:10,
  },
  card: {
    marginVertical: 10,
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal:10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    minWidth: itemWidth, 
    maxWidth: itemWidth,
  }
});
