import React, { Component } from 'react';
import { View, Image } from 'react-native';
import {
  Container,
  Content,
  Card,
  Text,
  Button
} from 'native-base';
import { connect } from 'react-redux';

class Welcome extends Component {

  componentWillMount(){
    if(this.props.auth.uid){
      this.props.navigation.navigate('App');
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.auth.uid){
      this.props.navigation.navigate('App');
    }
  }

  render(){
    return(
      <Container style={{ padding: 20 }}>
        <Content>
          <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 80, marginBottom: 40 }}>
            <Image source={require('../../logo.png')}/>
          </View>
          <Button block dark
            onPress={() => this.props.navigation.navigate('Register')}
            style={{ marginBottom: 10 }}
          >
            <Text>Register</Text>
          </Button>
          <Button block bordered dark onPress={() => this.props.navigation.navigate('Login')}>
            <Text>Login</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  }
}

export default connect(mapStateToProps)(Welcome);
