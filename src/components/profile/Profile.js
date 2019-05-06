import React, { Component } from 'react';
import {
  Container,
  Header,
  Left,
  Right,
  Body,
  Title,
  Text,
  Button
} from 'native-base';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions/authActions';

class Profile extends Component {

  componentWillMount(){
    if(!this.props.auth.uid){
      this.props.navigation.navigate('Login');
    }
  }

  componentWillReceiveProps(nextProps){
    if(!nextProps.auth.uid){
      this.props.navigation.navigate('Login');
    }
  }
  
  render(){
    return(
      <Container>
        <Header>
          <Left></Left>
          <Body>
            <Title>Profile</Title>
          </Body>
          <Right>
            <Button transparent dark onPress={() => this.props.logout()}>
              <Text>Logout</Text>
            </Button>
          </Right>
        </Header>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
