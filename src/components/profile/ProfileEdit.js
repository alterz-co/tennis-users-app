import React, { Component } from 'react';
import { View } from 'react-native';
import {
  Container,
  Header,
  Left,
  Right,
  Body,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Spinner
} from 'native-base';
import { connect } from 'react-redux';
import ProfileEditForm from './ProfileEditForm';

class ProfileEdit extends Component {
  render(){
    const { auth, profile } = this.props;

    if(!auth || !profile){
      return <Spinner color='grey'/>
    }

    return(
      <Container>
        <Header>
          <Left>
            <Button
              iconLeft transparent dark
              onPress={() => this.props.navigation.goBack()}>
              <Icon name='ios-arrow-back' />
              <Text>Back</Text>
            </Button>
          </Left>
          <Body></Body>
          <Right></Right>
        </Header>
        <Content>
          <Title style={{ fontSize: 30, marginTop: 40 }}>Edit Profile</Title>
          <ProfileEditForm userId={auth.uid} profile={profile}/>
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(ProfileEdit);
