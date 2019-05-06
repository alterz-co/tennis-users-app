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

class Schedule extends Component {
  render(){
    const { schedule } = this.props;

    if(!schedule){
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
            <Title>Schedule</Title>
          </Body>
          <Right></Right>
        </Header>
        <Content padding>
        {
          schedule && schedule.map(schedule => {
            return(
              <View key={schedule.id} style={{ padding: 40 }}>
                <HTMLView value={schedule.description}/>
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
    schedule: state.firestore.ordered.schedule
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'schedule', where: [ 'tournamentId', '==', 'nNQpGmwFKqdqxS47Tehm' ] }
  ])
)(Schedule);
