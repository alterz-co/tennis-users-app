import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {
  Container,
  Header,
  Left,
  Right,
  Body,
  Title,
  Content,
  Tab,
  Tabs,
  Form,
  Item,
  Input,
  Picker,
  Card,
  CardItem,
  Text,
  Button,
  Icon,
  Spinner
} from 'native-base';

class Template extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Text>Template</Text>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Template;
