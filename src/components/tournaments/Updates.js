import React, { Component } from 'react';
import { View } from 'react-native';
import {
  Card,
  CardItem,
  Text,
  Spinner
} from 'native-base';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import moment from 'moment';
import _ from 'lodash';
import HTMLView from 'react-native-htmlview';

class Updates extends Component {
  render() {
    const { updates } = this.props;

    if(!updates){
      return <Spinner color='grey'/>
    }

    const updatesDate = _.orderBy(updates, ['createdAt'], ['desc']);

    return (
      <View>
      {
        updatesDate && updatesDate.map(update => {
          return(
            <Card style={{ marginTop: 10 }} key={update.id}>
              <CardItem header>
                <View>
                  <Text>{update.name}</Text>
                  <Text note style={{ color: 'grey', fontSize: 12 }}>
                    {moment(update.createdAt.toDate()).calendar()}
                  </Text>
                </View>
              </CardItem>
              <CardItem>
                <HTMLView value={update.body}/>
              </CardItem>
            </Card>
          )
        })
      }
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    updates: state.firestore.ordered.updates
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'updates', where: [ 'tournamentId', '==', 'nNQpGmwFKqdqxS47Tehm' ] }
  ])
)(Updates);
