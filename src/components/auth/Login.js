import React, { Component } from 'react';
import { View } from 'react-native';
import {
  Container,
  Body,
  Title,
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
import { connect } from 'react-redux';
import { login } from '../../redux/actions/authActions';

class Login extends Component {

  state = {
    email: '',
    password: '',
    loading: false
  }

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

  onButtonPress = () => {
    try {
      if(this.state.email === ''){
        alert('Please enter your email')
        return;
      }
      if(this.state.password === ''){
        alert('Please enter your password')
        return;
      }
      const creds = {
        email: this.state.email,
        password: this.state.password
      }
      this.setState({ loading: true });
      this.props.login(creds);
      this.setState({
        email: '',
        password: '',
        loading: false
      });
    }

    catch(error){
      alert('Error')
      return;
    }
  }

  renderButton(){
    if(this.state.loading){
      return <Spinner color='grey'/>
    }

    return(
      <Button
        style={{ marginTop: 50 }}
        full
        rounded
        dark
        onPress={this.onButtonPress}
      >
        <Text style={{ color: 'white' }}>Login</Text>
      </Button>
    )
  }

  render(){
    return(
      <Container>
        <Title style={{ fontSize: 30, marginTop: 50 }}>Login</Title>
        <Form style={{ padding: 20 }}>
          <Item regular style={{ marginTop: 20 }}>
            <Input
              placeholder='Email'
              autoCorrect={false}
              autoCapitalize='none'
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
            />
          </Item>
          <Item regular style={{ marginTop: 20 }}>
            <Input
              placeholder='Password'
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize='none'
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
            />
          </Item>
          {this.renderButton()}
        </Form>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <Text>Not registered with us yet?</Text>
          <Button transparent dark onPress={() => this.props.navigation.navigate('Register')}>
            <Text style={{ color: 'grey', fontWeight: 'bold' }}>Register</Text>
          </Button>
        </View>
        {this.props.authError && (
          <Card style={{ paddingHorizontal: 10 }}>
            <CardItem header>
              <Text style={{ color: 'red' }}>Error</Text>
            </CardItem>
            <CardItem>
              <Body><Text style={{ color: 'red' }}>{this.props.authError}</Text></Body>
            </CardItem>
          </Card>
        )}
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (creds) => dispatch(login(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
