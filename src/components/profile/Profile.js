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
  Tab,
  Tabs,
  CardItem,
  Text,
  Button
} from 'native-base';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions/authActions';
import Singles from './tournaments/singles/Singles';
import Doubles from './tournaments/doubles/Doubles';

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
    const { profile } = this.props;

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
        <Content padder>
          <Title style={{ fontSize: 30, paddingTop: 20, paddingBottom: 10 }}>{profile.name}</Title>
          <View style={{ paddingLeft: 50, paddingRight: 50 }}>
            <Button
              small block bordered dark
              onPress={() => this.props.navigation.navigate('ProfileEdit')}>
              <Text>Edit Profile</Text>
            </Button>
          </View>
          <View style={{ marginTop: 20 }}>
            <CardItem header>
              <Text style={{ color: 'grey' }}>Basic Info</Text>
            </CardItem>
            <CardItem>
              <View>
                <Text>Gender: {profile.gender}</Text>
                <Text>Age: {profile.age}</Text>
                <Text>Nationality: {profile.nationality}</Text>
              </View>
            </CardItem>
          </View>
          <View style={{ marginBottom: 20 }}>
            <CardItem header>
              <Text style={{ color: 'grey' }}>Contact Info</Text>
            </CardItem>
            <CardItem>
              <View>
                <Text>Email: {profile.email}</Text>
                <Text>Phone: {profile.phone}</Text>
              </View>
            </CardItem>
          </View>
          <View style={{ flexDirection: 'row', paddingLeft: 50, paddingRight: 50 }}>
            <View style={{ width: 150 }}></View>
            <Button
              small dark
              style={{ marginTop: 5, marginBottom: 20 }}
              onPress={() => this.props.navigation.navigate('UserTournamentsAdd')}>
              <Text>+ Add Tournament</Text>
            </Button>
          </View>
          <Tabs tabBarUnderlineStyle={{ backgroundColor: 'black' }}>
            <Tab
              heading='Singles'
              tabStyle={{ backgroundColor: 'white' }}
              activeTabStyle={{ backgroundColor: 'white' }}
              activeTextStyle={{ color: 'black' }}
            >
              <Singles />
            </Tab>
            <Tab
              heading='Doubles'
              tabStyle={{ backgroundColor: 'white' }}
              activeTabStyle={{ backgroundColor: 'white' }}
              activeTextStyle={{ color: 'black' }}
            >
              <Doubles />
            </Tab>
          </Tabs>
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

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
