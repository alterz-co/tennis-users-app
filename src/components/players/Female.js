import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Text,
  Button,
  Spinner
} from 'native-base';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

class Female extends Component {
  render(){
    const { female } = this.props;

    if(!female){
      return <Spinner color='grey'/>
    }

    return(
      <View>
      {
        female && female.map(female => {
          return(
            <View style={styles.rowContainer} key={female.id}>
              <View style={styles.textContainer}>
                <Text style={styles.textStyle}>{female.name}</Text>
              </View>
              <View>
                <Button bordered dark>
                  <Text>Details</Text>
                </Button>
              </View>
            </View>
          )
        })
      }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 20
  },
  textContainer: {
    width: 200
  },
  textStyle: {
    paddingTop: 10
  }
});

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    female: state.firestore.ordered.female
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'users', storeAs: 'female', where: ['gender', '==', "Female"] }
  ])
)(Female);
