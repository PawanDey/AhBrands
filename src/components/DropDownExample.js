import React, { Component } from 'react';
import { Dropdown } from 'react-native-material';
 
export default class DropdownExample extends Component {
  render() {
    let data = [{
      value: 'Banana',
    }, {
      value: 'Mango',
    }, {
      value: 'Pear',
    }];
 
    return (
      <Dropdown
        label='Favorite Fruit'
        data={data}
      />
    );
  }
}