import React from 'react';
import {SafeAreaView, StyleSheet, Button, Text, View, TouchableOpacity, ScrollView, Image, ActivityIndicator, TextInput, Alert } from 'react-native';
import { MaterialIcons, AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import FixedStatusBar from '../components/StatusBar';
import { theme } from '../core/theme';
import DropDownPicker from 'react-native-dropdown-picker';
import { color } from 'react-native-reanimated';



export default class MyOrder extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			open: false,
            value: null,
            items: [
                {label: 'Cash', value: 'cash'},
                {label: 'Credit', value: 'credit'},
                {label: 'Check', value: 'check'},
                {label: 'Online Payment', value: 'online_payment'},
              ],
              Notes:'',
              Coupon:''
		}

        this.setValue = this.setValue.bind(this);
        this.setOpen = this.setOpen.bind(this); 
        this.setItems = this.setItems.bind(this);

	}

    setOpen(open) {
      //  console.log(open)
        this.setState({open:open})
        // this.setState({
        //   open
        // });
      }
    
      setValue(callback) {

            console.log("set value",callback)
           // this.setState({value:callback})
        this.setState(state => ({
          value: callback(state.value)
        }));
        
        console.log("set Val Update", this.state.value)
      }
    
      setItems(callback) {

       // console.log("set Item", callback)
           // this.setState({items:callback})
        this.setState(state => ({
          items: callback(state.items)
        }));
        console.log(this.state.items)
      }
    
	
	
	render() {
		const styles = StyleSheet.create({
			centerElement: {justifyContent: 'center', alignItems: 'center'},
		});
		
		const { open, value, items } = this.state;
        		//console.log("items",items);
		return (
            
			<View style={{flex: 1, backgroundColor: '#eeeff7'}}>
            <ScrollView>
                       
                    <View style={{backgroundColor: '#fff',padding:30, borderWidth: 1, margin:15}}>
                        
                            <View style={styles.inputView} >
                                <Text style={{fontSize: 15, color: '#000'}}>Mode</Text>
                                <Text style={{fontSize: 15, color: '#000'}}>Cash</Text>
                                
                                <View style={{justifyContent: 'flex-end', height: 32, paddingRight: 20, alignItems: 'flex-end'}}>
                                    <TouchableOpacity style={[styles.centerElement, {width: 100, height: 30, borderRadius: 5}]} onPress={() => console.log('test')}>
                                        <Text style={{fontSize: 15, color: '#000'}}>Order Id:</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[styles.centerElement, {width: 100, height: 30, borderRadius: 5}]} onPress={() => console.log('test')}>
                                        <Text style={{fontSize: 15, color: '#000'}}>107</Text>
                                    </TouchableOpacity>
                            </View>
                        </View> 
                        <View style={styles.inputView} >
                                <Text style={{fontSize: 15, color: '#000'}}>Order For</Text>
                                
                            <View style={{justifyContent: 'flex-end', height: 32, paddingRight: 20, alignItems: 'flex-end'}}>
                                <TouchableOpacity style={[styles.centerElement, {width: 100, height: 30, borderRadius: 5}]} onPress={() => console.log('test')}>
                                <Text style={{fontSize: 15, color: '#000'}}> Manohar Kumar</Text>
                                </TouchableOpacity>
                            </View>
                        </View> 
                        <View style={styles.inputView} >
                                <Text style={{fontSize: 15, color: '#000'}}>Data: </Text>
                                
                            <View style={{justifyContent: 'flex-end', height: 32, paddingRight: 20, alignItems: 'flex-end'}}>
                                <TouchableOpacity style={[styles.centerElement, {width: 100, height: 30, borderRadius: 5}]} onPress={() => console.log('test')}>
                                    <Text style={{fontSize: 15, color: '#000'}}> 23/12/2021</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.inputView} >
                                <Text style={{fontSize: 15, color: '#000'}}>Time: </Text>
                                
                            <View style={{justifyContent: 'flex-end', height: 32, paddingRight: 20, alignItems: 'flex-end'}}>
                                <TouchableOpacity style={[styles.centerElement, {width: 100, height: 30, borderRadius: 5}]} onPress={() => console.log('test')}>
                                    <Text style={{fontSize: 15, color: '#000'}}> 19:07</Text>
                                </TouchableOpacity>
                            </View>
                        </View>   

                        <View style={{flexDirection: 'row'}}>
							
							<View style={{flexDirection: 'row', flexGrow: 1, flexShrink: 1, justifyContent: 'space-between', alignItems: 'center'}}>
								<View style={{flexDirection: 'row', paddingRight: 20, alignItems: 'center'}}>
									
								</View>
							</View>
						</View>
						<View style={{flexDirection: 'row', justifyContent: 'flex-end', height: 50, paddingRight:60, alignItems: 'center'}}>
							<TouchableOpacity style={[styles.centerElement, {backgroundColor: theme.colors.primary, width: 200, height: 50, borderRadius: 5}]} onPress={() => console.log('test')}>
								<Text style={{color: '#ffffff'}}>See Details</Text>
							</TouchableOpacity>
						</View>
						              
                    </View>

                    <View style={{backgroundColor: '#fff',padding:30, borderWidth: 1, margin:15}}>
                        
                            <View style={styles.inputView} >
                                <Text style={{fontSize: 15, color: '#000'}}>Mode</Text>
                                <Text style={{fontSize: 15, color: '#000'}}>Cash</Text>
                                
                                <View style={{justifyContent: 'flex-end', height: 32, paddingRight: 20, alignItems: 'flex-end'}}>
                                    <TouchableOpacity style={[styles.centerElement, {width: 100, height: 30, borderRadius: 5}]} onPress={() => console.log('test')}>
                                        <Text style={{fontSize: 15, color: '#000'}}>Order Id:</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[styles.centerElement, {width: 100, height: 30, borderRadius: 5}]} onPress={() => console.log('test')}>
                                        <Text style={{fontSize: 15, color: '#000'}}>107</Text>
                                    </TouchableOpacity>
                            </View>
                        </View> 
                        <View style={styles.inputView} >
                                <Text style={{fontSize: 15, color: '#000'}}>Order For</Text>
                                
                            <View style={{justifyContent: 'flex-end', height: 32, paddingRight: 20, alignItems: 'flex-end'}}>
                                <TouchableOpacity style={[styles.centerElement, {width: 100, height: 30, borderRadius: 5}]} onPress={() => console.log('test')}>
                                <Text style={{fontSize: 15, color: '#000'}}> Manohar Kumar</Text>
                                </TouchableOpacity>
                            </View>
                        </View> 
                        <View style={styles.inputView} >
                                <Text style={{fontSize: 15, color: '#000'}}>Data: </Text>
                                
                            <View style={{justifyContent: 'flex-end', height: 32, paddingRight: 20, alignItems: 'flex-end'}}>
                                <TouchableOpacity style={[styles.centerElement, {width: 100, height: 30, borderRadius: 5}]} onPress={() => console.log('test')}>
                                    <Text style={{fontSize: 15, color: '#000'}}> 23/12/2021</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.inputView} >
                                <Text style={{fontSize: 15, color: '#000'}}>Time: </Text>
                                
                            <View style={{justifyContent: 'flex-end', height: 32, paddingRight: 20, alignItems: 'flex-end'}}>
                                <TouchableOpacity style={[styles.centerElement, {width: 100, height: 30, borderRadius: 5}]} onPress={() => console.log('test')}>
                                    <Text style={{fontSize: 15, color: '#000'}}> 19:07</Text>
                                </TouchableOpacity>
                            </View>
                        </View>   

                        <View style={{flexDirection: 'row'}}>
							
							<View style={{flexDirection: 'row', flexGrow: 1, flexShrink: 1, justifyContent: 'space-between', alignItems: 'center'}}>
								<View style={{flexDirection: 'row', paddingRight: 20, alignItems: 'center'}}>
									
								</View>
							</View>
						</View>
						<View style={{flexDirection: 'row', justifyContent: 'flex-end', height: 50, paddingRight:60, alignItems: 'center'}}>
							<TouchableOpacity style={[styles.centerElement, {backgroundColor: theme.colors.primary, width: 200, height: 50, borderRadius: 5}]} onPress={() => console.log('test')}>
								<Text style={{color: '#ffffff'}}>See Details</Text>
							</TouchableOpacity>
						</View>
						              
                    </View>

                    <View style={{backgroundColor: '#fff',padding:30, borderWidth: 1, margin:15}}>
                        
                            <View style={styles.inputView} >
                                <Text style={{fontSize: 15, color: '#000'}}>Mode</Text>
                                <Text style={{fontSize: 15, color: '#000'}}>Cash</Text>
                                
                                <View style={{justifyContent: 'flex-end', height: 32, paddingRight: 20, alignItems: 'flex-end'}}>
                                    <TouchableOpacity style={[styles.centerElement, {width: 100, height: 30, borderRadius: 5}]} onPress={() => console.log('test')}>
                                        <Text style={{fontSize: 15, color: '#000'}}>Order Id:</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[styles.centerElement, {width: 100, height: 30, borderRadius: 5}]} onPress={() => console.log('test')}>
                                        <Text style={{fontSize: 15, color: '#000'}}>107</Text>
                                    </TouchableOpacity>
                            </View>
                        </View> 
                        <View style={styles.inputView} >
                                <Text style={{fontSize: 15, color: '#000'}}>Order For</Text>
                                
                            <View style={{justifyContent: 'flex-end', height: 32, paddingRight: 20, alignItems: 'flex-end'}}>
                                <TouchableOpacity style={[styles.centerElement, {width: 100, height: 30, borderRadius: 5}]} onPress={() => console.log('test')}>
                                <Text style={{fontSize: 15, color: '#000'}}> Manohar Kumar</Text>
                                </TouchableOpacity>
                            </View>
                        </View> 
                        <View style={styles.inputView} >
                                <Text style={{fontSize: 15, color: '#000'}}>Data: </Text>
                                
                            <View style={{justifyContent: 'flex-end', height: 32, paddingRight: 20, alignItems: 'flex-end'}}>
                                <TouchableOpacity style={[styles.centerElement, {width: 100, height: 30, borderRadius: 5}]} onPress={() => console.log('test')}>
                                    <Text style={{fontSize: 15, color: '#000'}}> 23/12/2021</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.inputView} >
                                <Text style={{fontSize: 15, color: '#000'}}>Time: </Text>
                                
                            <View style={{justifyContent: 'flex-end', height: 32, paddingRight: 20, alignItems: 'flex-end'}}>
                                <TouchableOpacity style={[styles.centerElement, {width: 100, height: 30, borderRadius: 5}]} onPress={() => console.log('test')}>
                                    <Text style={{fontSize: 15, color: '#000'}}> 19:07</Text>
                                </TouchableOpacity>
                            </View>
                        </View>   

                        <View style={{flexDirection: 'row'}}>
							
							<View style={{flexDirection: 'row', flexGrow: 1, flexShrink: 1, justifyContent: 'space-between', alignItems: 'center'}}>
								<View style={{flexDirection: 'row', paddingRight: 20, alignItems: 'center'}}>
									
								</View>
							</View>
						</View>
						<View style={{flexDirection: 'row', justifyContent: 'flex-end', height: 50, paddingRight:60, alignItems: 'center'}}>
							<TouchableOpacity style={[styles.centerElement, {backgroundColor: theme.colors.primary, width: 200, height: 50, borderRadius: 5}]} onPress={() => console.log('test')}>
								<Text style={{color: '#ffffff'}}>See Details</Text>
							</TouchableOpacity>
						</View>
						              
                    </View>

            </ScrollView>
						
			</View>          
                       
			
		);
	}
}

// const styles = StyleSheet.create({
//     // input: {
//     //     height: 40,
//     //     margin: 20,
//     //     borderWidth: 1,
//     //     padding: 10,
//     //     border:2, 
//     //     margin:10
//     //   },
//   });