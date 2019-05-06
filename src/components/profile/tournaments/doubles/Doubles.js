import React from 'react';
import { View } from 'react-native';
import {
  Text,
  Button,
  Spinner
} from 'native-base';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import _ from 'lodash';
import MaleDoubles from './MaleDoubles';
import FemaleDoubles from './FemaleDoubles';

class Doubles extends React.Component {
  render() {
    const { auth, profile, maleDoubles, femaleDoubles } = this.props;

    if(!maleDoubles){
      return <Spinner color='grey'/>
    }

    if(!femaleDoubles){
      return <Spinner color='grey'/>
    }

    const maleDoublesYear = _.orderBy(maleDoubles, ['year'], ['desc']);
    const femaleDoublesYear = _.orderBy(femaleDoubles, ['year'], ['desc']);

    return (
      <View>
      {profile.gender === 'Male' ? <MaleDoubles userId={auth.uid} maleDoubles={maleDoublesYear}/> : <FemaleDoubles userId={auth.uid} femaleDoubles={femaleDoublesYear}/>}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    maleDoubles: state.firestore.ordered.maleDoubles,
    femaleDoubles: state.firestore.ordered.femaleDoubles
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'userTournaments', storeAs: 'maleDoubles', where: ['category', '==', "Male Doubles"] },
    { collection: 'userTournaments', storeAs: 'femaleDoubles', where: ['category', '==', "Female Doubles"] }
  ])
)(Doubles);
