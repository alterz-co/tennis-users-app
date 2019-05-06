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

class Male extends Component {
  render(){
    const { male } = this.props;

    if(!male){
      return <Spinner color='grey'/>
    }

    return(
      <View>
      {
        male && male.map(male => {
          return(
            <View style={styles.rowContainer} key={male.id}>
              <View style={styles.textContainer}>
                <Text style={styles.textStyle}>{male.name}</Text>
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
    male: state.firestore.ordered.male
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'users', storeAs: 'male', where: ['gender', '==', "Male"] }
  ])
)(Male);
