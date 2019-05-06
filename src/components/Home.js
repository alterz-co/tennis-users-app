import React, { Component } from 'react';
import { View, Linking } from 'react-native';
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
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import Updates from './tournaments/Updates';

class Home extends Component {
  render(){
    const { tournament } = this.props;

    if(!tournament){
      return <Spinner color='grey'/>
    }

    return(
      <Container>
        <Header>
          <Left>
            <Icon
              name="md-menu"
              style={{ color: 'black', paddingLeft: 10 }}
              onPress={() => this.props.navigation.toggleDrawer()}
            />
          </Left>
          <Body>
            <Title>Home</Title>
          </Body>
          <Right></Right>
        </Header>
        <Content padder>
        {
          tournament && tournament.map(tournament => {
            return(
              <View style={{ padding: 10 }} key={tournament.id}>
                <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>{tournament.title}</Text>
                <Text>Date: {tournament.date}</Text>
                <Text>Time: {tournament.time}</Text>
                <Text>Venue: {tournament.venue}</Text>
                <Button
                  transparent dark
                  style={{ marginTop: -10 }}
                  onPress={() => Linking.openURL(tournament.url)}>
                  <Text style={{ paddingLeft: -10 }}>Link</Text>
                </Button>
              </View>
            )
          })
        }
        <Updates/>
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    tournament: state.firestore.ordered.tournament
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'tournaments',
      storeAs: 'tournament',
      where: [ 'title', '==', 'STA Intermediate Singles & Doubles I 2019' ] }
  ])
)(Home);
