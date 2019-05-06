import React, { Component } from 'react';
import { View } from 'react-native';
import { Spinner } from 'native-base';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import _ from 'lodash';
import MaleSingles from './MaleSingles';
import FemaleSingles from './FemaleSingles';

class Singles extends Component {
  render(){
    const { auth, profile, maleSingles, femaleSingles } = this.props;

    if(!maleSingles){
      return <Spinner color='grey'/>
    }

    if(!femaleSingles){
      return <Spinner color='grey'/>
    }

    const maleSinglesYear = _.orderBy(maleSingles, ['year'], ['desc']);
    const femaleSinglesYear = _.orderBy(femaleSingles, ['year'], ['desc']);

    return(
      <View>
      {profile.gender === 'Male' ? <MaleSingles userId={auth.uid} maleSingles={maleSinglesYear}/> : <FemaleSingles userId={auth.uid} femaleSingles={femaleSinglesYear}/>}
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    maleSingles: state.firestore.ordered.maleSingles,
    femaleSingles: state.firestore.ordered.femaleSingles
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'userTournaments', storeAs: 'maleSingles', where: ['category', '==', "Male Singles"] },
    { collection: 'userTournaments', storeAs: 'femaleSingles', where: ['category', '==', "Female Singles"] }
  ])
)(Singles);
