import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../core/theme';
import BackButton from '../components/BackButton';
import { color } from 'react-native-reanimated';
import { apiService } from '../services/api.services';

export default class Profile extends Component {

  constructor(props){
    super(props);

    this.state = {
        dataSource: []
    }
}

async componentDidMount () {
    apiService.getProfileInfo(11).then(data => {
        console.log("getProfileInfo-",data);
        this.setState({
          dataSource: data
        })
      },
      error => {
        console.log(error);
      })
}


  render() {
    return (
      <View style={styles.container}>

          <View style={styles.header}>
                <BackButton/>
                <Text style={styles.profile}>Profile</Text>
          </View>

          <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
          

          <View style={styles.body}>
            
              <View style={styles.bodyContent}>
                <Text style={styles.name}>{this.state.dataSource.name}</Text>
                <Text style={styles.description}>{this.state.dataSource.user_type}</Text>
              </View>
          </View>

          <View style={styles.main}>
              <View style={styles.firstrow}>
                    <View style={styles.field}>
                    <Ionicons
                        name="mail"
                        size={18}
                        color={theme.colors.primary}
                        style={styles.icon}/>
                      <Text style={styles.info}>Email:</Text>
              </View>

              <View style={styles.secrow}>
                    <Text style={styles.description}>{this.state.dataSource.email}</Text>
              </View>
          </View>
          </View>

          <View style={styles.divider}/>

          <View style={styles.main}>
              <View style={styles.firstrow}>
                    <View style={styles.field}>
                    <Ionicons
                        name="mail"
                        size={18}
                        color={theme.colors.primary}
                        style={styles.icon}/>
                      <Text style={styles.info}>Business:</Text>
              </View>

              <View style={styles.secrow}>
                    <Text style={styles.description}>{this.state.dataSource.user_type}</Text>
              </View>
          </View>
          </View>

          <View style={styles.divider}/>

          <View style={styles.main}>
              <View style={styles.firstrow}>
                    <View style={styles.field}>
                    <Ionicons
                        name="mail"
                        size={18}
                        color={theme.colors.primary}
                        style={styles.icon}/>
                      <Text style={styles.info}>Contact:</Text>
              </View>

              <View style={styles.secrow}>
                    <Text style={styles.description}>{this.state.dataSource.contact}</Text>
              </View>
          </View>
          </View>

          <View style={styles.divider}/>

          <View style={styles.main}>
              <View style={styles.firstrow}>
                    <View style={styles.field}>
                    <Ionicons
                        name="mail"
                        size={18}
                        color={theme.colors.primary}
                        style={styles.icon}/>
                      <Text style={styles.info}>Address:</Text>
              </View>

              <View style={styles.secrow}>
                    <Text style={styles.description}>{this.state.dataSource.contact}</Text>
              </View>
          </View>
          </View>

          <View style={styles.divider}/>

          <View style={styles.main}>
              <View style={styles.firstrow}>
                    <View style={styles.field}>
                    <Ionicons
                        name="mail"
                        size={18}
                        color={theme.colors.primary}
                        style={styles.icon}/>
                      <Text style={styles.info}>Delivery Address:</Text>
              </View>

              <View style={[styles.icon,{backgroundColor:'white'}]}>
                    <Ionicons
                        name="pencil"
                        size={18}
                        color={theme.colors.primary}
                        style={[styles.icon,{color:theme.colors.primary}]} />
              </View>

              <View style={styles.secrow}>
                    <Text style={styles.description}>{this.state.dataSource.delivery_address != "" ? <Text> {this.state.dataSource.delivery_address} </Text> : this.state.dataSource.status } </Text>
              </View>

          </View>
          </View>

          <View style={styles.divider}/>

          <View style={styles.main}>
              <View style={styles.firstrow}>
                    <View style={styles.field}>
                    <Ionicons
                        name="mail"
                        size={18}
                        color={theme.colors.primary}
                        style={styles.icon}/>
                      <Text style={styles.info}>BI No.:</Text>
              </View>

              <View style={styles.secrow}>
                    <Text style={styles.description}>{this.state.dataSource.business_identification_no}</Text>
              </View>
          </View>
          </View>

          <View style={styles.divider}/>

          <View style={styles.main}>
              <View style={styles.firstrow}>
                    <View style={styles.field}>
                    <Ionicons
                        name="mail"
                        size={18}
                        color={theme.colors.primary}
                        style={styles.icon}/>
                      <Text style={styles.info}>Status:</Text>
              </View>

              <View style={styles.secrow}>
                    <Text style={styles.description}>{this.state.dataSource.status}</Text>
              </View>
          </View>
          </View>

          <View style={styles.divider}/>


         

           
          <View style={styles.footer}></View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
    height:200,
    borderBottomEndRadius:50,
    borderBottomStartRadius:50,
  },
  footer:{
    backgroundColor: "#00BFFF",
    height:80,
    borderTopEndRadius:50,
    borderTopStartRadius:50,
    marginTop:120,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 5,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130,
  },
  profile:{
    fontSize:22,
    color:"#fff",
    fontWeight:'600',
    textAlign: 'center',
    marginTop:60,
  },
  body:{
    marginTop:40,
    marginBottom:20
  },
  bodyContent: {
    alignItems: 'center',
    padding:20,
  },
  field: {
    flexDirection:'row',
    width:160,
  },
  icon: {
    marginRight:8,
  },
  name:{
    fontSize:28,
    color: "#000",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#000",
    fontWeight:'700',
  },
  description:{
    fontSize:16,
    color: "#696969",
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
  container:{
    backgroundColor:'white',
  },
  main:{
    flexDirection:'row',
    paddingVertical:8,
    marginHorizontal:30,
  },
  firstrow:{    
    flexDirection:'row',
  },
  secrow:{
  },
  divider:{
    height:1,
    width:"80%",
    alignSelf:'center',
    marginBottom:10,
    backgroundColor:"#d2d0d2",
  },
});