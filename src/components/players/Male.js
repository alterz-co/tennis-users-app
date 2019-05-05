import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Male extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Text>Male</Text>
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

export default Male;
