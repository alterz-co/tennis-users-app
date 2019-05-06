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
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import HTMLView from 'react-native-htmlview';

class About extends Component {
  render(){
    const { tournament } = this.props;

    if(!tournament){
      return <Spinner color='grey'/>
    }

    return(
      <Container>
        <Header>
          <Left>
            <Button iconLeft transparent dark onPress={() => this.props.navigation.goBack()}>
              <Icon name='ios-arrow-back' />
              <Text>Back</Text>
            </Button>
          </Left>
          <Body>
            <Title>About</Title>
          </Body>
          <Right></Right>
        </Header>
        <Content padding style={{ padding: 20 }}>
        {
          tournament && tournament.map(tournament => {
            return(
              <View style={{ padding: 10 }} key={tournament.id}>
                <HTMLView value={tournament.description}/>
              </View>
            )
          })
        }
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
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
)(About);
