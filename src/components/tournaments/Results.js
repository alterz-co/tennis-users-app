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
  List,
  ListItem,
  Text,
  Button,
  Icon,
  Spinner
} from 'native-base';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import HTMLView from 'react-native-htmlview';

class Results extends Component {
  render(){
    const { results } = this.props;

    if(!results){
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
            <Title>Results</Title>
          </Body>
          <Right></Right>
        </Header>
        <Content padding>
        {
          results && results.map(result => {
            return(
              <List key={result.id}>
                <ListItem itemDivider style={{ backgroundColor: 'black' }}>
                  <Text style={{ color: 'white' }}>{result.date}</Text>
                </ListItem>
                <View style={{ padding: 40 }}>
                  <HTMLView value={result.description}/>
                </View>
              </List>
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
    results: state.firestore.ordered.results
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'results', where: [ 'tournamentId', '==', 'nNQpGmwFKqdqxS47Tehm' ] }
  ])
)(Results);
