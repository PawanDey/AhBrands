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
} from 'react-native';
import TextTicker from 'react-native-text-ticker'
import { theme } from '../core/theme';
import { apiService } from '../services/api.services';
import { useNavigation } from '@react-navigation/native';

const {height, width} = Dimensions.get('window');
const itemWidth = (width - 15) / 2;


export default function AllProductsView () {
  const [dataSource, setDataSource] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
      apiService.getAllProducts().then(data => {
          console.log("getAllProducts-",data);
          setDataSource(data);
        },
        error => {
          console.log(error);
        })
  }, []);


    return (
        <SafeAreaView style={styles.container}>

            <FlatList
                data={dataSource}
                renderItem={({item}) => (
                
                <TouchableOpacity
                    style={{
                    flex: 1,
                    flexDirection: 'column',
                    }}  onPress={() => {
                      // alert('You Tapped: '+item.product_name);
                      navigation.navigate('Products Details')
                    }}>
                    <View style={styles.card}>
                        <Image
                        style={styles.tilesimage}
                        source={{uri: item.product_image}} />
                         {/* source={{uri: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'}}/>  */}

                        <Text numberOfLines={1} ellipsizeMode='tail' style={styles.titleStyle}>
                           {item.product_name}
                        </Text>  

                        {/* <TextTicker
                          style={styles.titleStyle}
                          duration={8000}
                          loop
                          bounce
                          repeatSpacer={20}
                          marqueeDelay={1000}>
                          {item.product_name}
                          </TextTicker>   */}

                          <View style={styles.priceview}>

                          <Text style={styles.pricetype}>
                            $ 
                          </Text> 

                          <Text style={styles.oldPrice}>
                            {item.old_price}
                            </Text> 

                            <Text style={styles.newPrice}>
                            {item.new_price}
                            </Text>   

                           
                          </View>

                    </View>
                </TouchableOpacity>)}
            
                //Setting the number of column
                numColumns={2}
                keyExtractor={(item) => item.product_id}
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
  },
  priceview:{
    flexDirection:'row',
    width:"100%",
    justifyContent:'center',
    paddingHorizontal:10,
    marginVertical:8,
  },
  newPrice:{
    color:theme.colors.primary,
    fontWeight:'bold',
    fontSize:16,
  },
  oldPrice:{
    color:'gray',
    textAlign:'right',
    fontSize:16,
    marginRight:6,
    textDecorationLine: 'line-through', 
    textDecorationStyle: 'solid'
  },
  pricetype:{
    marginRight:6,
    fontWeight:'700',
    color:theme.colors.text,
  }
});
