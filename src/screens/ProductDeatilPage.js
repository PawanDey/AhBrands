import React, { Component } from 'react'; 
import {
  StyleSheet,
  SafeAreaView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  Alert,
  ScrollView,  
  Platform,
  FlatList,
  Button,
} from 'react-native'; 
import ImageSlider from 'react-native-image-slider';  
import { Divider } from 'react-native-paper';
import Paragraph from '../components/Paragraph';
import Header from '../components/Header';
import { theme } from '../core/theme';
import { Ionicons } from '@expo/vector-icons';
import { apiService } from '../services/api.services';

 
export default class ProductDetail extends Component {  

    constructor(props) {
      super(props);
      this.state={
        dataSource:[],
        product_gallery:[],
        Increment:'',
        Decrement:'',
        Reset:'',
        Quantity:0,
      }

      this.quantityHandle = this.quantityHandle.bind(this); 
    }
  
    clickEventListener() {
      Alert.alert("Success", "Product has beed added to cart")
    }

async componentDidMount () {

  // Change static product id from below to dynamic id
  apiService.getProductDetails(5).then(data => {
    console.log("productDetails",data);
    const length = Object.keys(data.product_gallery).length;
    const product_gallery  = Object.values(data.product_gallery);
     console.log('res',length)
     console.log('img',product_gallery) 
    this.setState({
      dataSource: data ,
      product_gallery: product_gallery
   })
  },
  error => {
    console.log(error);

  })

      //   fetch('https://app.ahbrands.com/api/products/product.php?product_id=5', {
      //     method: 'GET'
      // })
      // .then((response) => response.json())
      // .then((responseJson) => {
      //   console.log("productDetails",responseJson);
      //   const length = Object.keys(responseJson.product_gallery).length;
      //   const product_gallery  = Object.values(responseJson.product_gallery);
      //    console.log('res',length)
      //    console.log('img',product_gallery) 
          
      //    this.setState({
      //       dataSource: responseJson ,
      //       product_gallery: product_gallery
      //    })
      // })
      // .catch((error) => {
      //     console.error(error);
      // });
   }
  
   quantityHandle(e){

    console.log(e)
          let value = e.target.value;
          let name = e.target.name; 

           this.setState({Quantity: e.target.value});
           console.log("qty--",this.state.Quantity)
   }
  
 render() {   
  const {product_gallery, dataSource } = this.state;
  console.log(dataSource)
  console.log("img",product_gallery)
  return (
  <SafeAreaView style={styles.container}>

        <ScrollView > 

          <ImageSlider 
              images={product_gallery}
              autoPlayWithInterval={3000}  
              customSlide={({ index, item, style, width }) => (
                // It's important to put style here because it's got offset inside
                <View key={index} style={[style, styles.customSlide]}>
                  <Image source={{ uri: item }} style={styles.customImage} />
                </View>
              )}  /> 

            <View style={styles.main}>

                <View style={styles.headerview}>
                    <View style={styles.pro_name}>
                         <Text style={styles.pro_name_txt}>{dataSource.product_name}</Text>
                    </View>

                    <View style={styles.pro_price}>
                        <Text style={styles.oldprice}>$ {dataSource.old_price}</Text>
                        <Text style={styles.newprice}>$ {dataSource.new_price}</Text>
                    </View>

                </View>

                <View style={styles.divider}/>


                <View style={styles.bodyview}>
                    <View>
                      <Header style={styles.headertag}>Description</Header>
                      <Paragraph>{dataSource.product_description}</Paragraph>

                      <Header style={styles.headertag}>Link</Header>
                      <Paragraph>{dataSource.link}</Paragraph>

                      <Header style={styles.headertag}>Additional Info</Header>
                      <Paragraph>{dataSource.additional_info}</Paragraph>

                      <Header style={styles.headertag}>Features</Header>
                      <Paragraph>{dataSource.features && dataSource.features.map( (feature, i) =>{
                            return(<Text style={styles.pro_name_txt}> {i+1} {feature}</Text>)})}
                      </Paragraph>
                        
                    </View>
                </View>

            </View>

        </ScrollView>



        {/* Bottom View */}
        <View style={styles.BottomView}>

                <View style={styles.qty_btn_view}> 
                      <TouchableOpacity style={styles.qty_btn} onPress={(e)=>{this.setState({Quantity: this.state.Quantity -1})}}>
                                <Text style={styles.qty_btn_text}> - </Text> 
                          </TouchableOpacity>

                          <TextInput name="Quantity" placeholder='1' maxLength={3} style={styles.qty_input} value={this.state.Quantity} onChange={this.quantityHandle} />
                          
                          <TouchableOpacity style={styles.qty_btn} onPress={(e)=>{this.setState({Quantity: this.state.Quantity +1})}}>
                                <Text style={styles.qty_btn_text}> + </Text> 
                          </TouchableOpacity>       
                </View> 
                  
                <View style={styles.addToCartContainer}>

                    <TouchableOpacity style={styles.add_btn_view} onPress={()=> this.clickEventListener()}>

                      <Text style={styles.add_btn_text}>Add To Cart</Text>  

                      <Ionicons
                      name="cart"
                      size={20}
                      color={'white'} />

                    </TouchableOpacity>
                  
                </View> 

          </View>

        </SafeAreaView>
      );
    }
  }

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  },
  productImg:{
    width:200,
    height:200,
  },
  name:{
    fontSize:28,
    color:"#696969",
    fontWeight:'bold'
  },
  price:{
    marginTop:10,
    fontSize:18,
    color:"green",
    fontWeight:'bold'
  },
  description:{
    textAlign:'center',
    marginTop:10,
    color:"#696969",
  },
  btnColor: {
    height:30,
    width:30,
    borderRadius:30,
    marginHorizontal:3
  },
  add_btn_view: {
    height:40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    width:140,
    alignSelf:'flex-end',
    backgroundColor: "#00BFFF",
    shadowColor: "#8a8a8a",
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 6,
  },
  rowCenter:{
    justifyContent:'center', 
    backgroundColor: "#fff",
    alignItems: 'center', 
  },
  qty_input:{
    width: 50,
    color:theme.colors.primary,
    fontSize:18,
    fontWeight:'700',
    textAlign:'center'
  },
  qty_btn:{
    height:40, 
    width:40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    alignContent:'center',
    backgroundColor: 'white',
    shadowColor: "#8a8a8a",
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 6,
  },
  qty_btn_text:{
    color: theme.colors.primary,
    fontSize:20,
  },
  add_btn_text:{
    color: 'white',
    marginHorizontal:8,
  },
  Title:{
      color:'red',
  },
  TitleValue:{
    color:'black',
  },
  customImage:{
    height:260, 
  },
  customSlide:{
    height:260, 
  },
 
  BottomView:{
    flexDirection:'row',
    backgroundColor:"#e6edfa",
    borderRadius:100,
    margin:10,
    paddingHorizontal:20,
    paddingVertical:10
  },
  qty_btn_view:{
    flexDirection:'row',
    flex:1,
  },
  addToCartContainer:{
     flex:1,
  },


  main:{
    backgroundColor:'white',
    flex:1,
    height:500,
    padding:20,
  },
  headerview:{
    backgroundColor:'white',
    padding:10,
    flexDirection:'row'
  },
  pro_name:{
    width:270
  },
  pro_name_txt:{
    fontSize:18,
    fontWeight:'700',
  },
  pro_price:{
    marginHorizontal:20,
  },
  oldprice:{
    fontSize:16,
    color:'gray',
    alignSelf:'flex-end',
    textDecorationLine: 'line-through'
  },
  newprice:{
    fontSize:24,
    color:theme.colors.primary,
    fontWeight:'700',
    alignSelf:'flex-end'
  },
  bodyview:{
    backgroundColor:'white',
    padding:10,
  },
  divider:{
    height:1,
    width:"100%",
    alignSelf:'center',
    marginVertical:10,
    backgroundColor:'gray'
  },
  headertag:{
    color:'black',
    fontSize:16,
    fontWeight:'700'
  }

});    