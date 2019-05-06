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
import { register } from '../../redux/actions/authActions';

class Register extends Component {

  state = {
    name: '',
    gender: '',
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
      if(this.state.name === ''){
        alert('Please enter your name')
        return;
      }
      if(this.state.gender === ''){
        alert('Please enter your gender')
        return;
      }
      if(this.state.email === ''){
        alert('Please enter your email')
        return;
      }
      if(this.state.password === ''){
        alert('Please enter your password')
        return;
      }
      const newUser = {
        name: this.state.name,
        gender: this.state.gender,
        email: this.state.email,
        password: this.state.password
      }
      this.setState({ loading: true });
      this.props.register(newUser);
      this.setState({
        name: '',
        gender: '',
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
        <Text style={{ color: 'white' }}>Register</Text>
      </Button>
    )
  }

  render(){
    return(
      <Container>
        <Title style={{ fontSize: 30, marginTop: 50 }}>Register</Title>
        <Form style={{ padding: 20 }}>
          <Item regular style={{ marginTop: 20 }}>
            <Input
              placeholder='Name *'
              autoCorrect={false}
              autoCapitalize='none'
              value={this.state.name}
              onChangeText={name => this.setState({ name })}
            />
          </Item>
          <Item picker style={{ marginTop: 20 }}>
            <Picker
                mode="dropdown"
                iosIcon={<Icon name="ios-arrow-down" />}
                style={{ width: undefined }}
                placeholder="Gender *"
                placeholderStyle={{ color: "black" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.gender}
                onValueChange={(value: string) => this.setState({ gender: value })}
              >
                <Picker.Item label="Male" value="Male" />
                <Picker.Item label="Female" value="Female" />
              </Picker>
          </Item>
          <Item regular style={{ marginTop: 20 }}>
            <Input
              placeholder='Email *'
              autoCorrect={false}
              autoCapitalize='none'
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
            />
          </Item>
          <Item regular style={{ marginTop: 20 }}>
            <Input
              placeholder='Password *'
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
          <Text>Already have an account?</Text>
          <Button transparent dark onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={{ color: 'grey', fontWeight: 'bold' }}>Login</Text>
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
    register: (creds) => dispatch(register(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
