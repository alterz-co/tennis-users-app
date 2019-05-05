import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class ProfileEdit extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Text>ProfileEdit</Text>
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

export default ProfileEdit;
