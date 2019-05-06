import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Text,
  Button
} from 'native-base';

class FemaleSingles extends Component {
  render() {
    const { userId, femaleSingles } = this.props;

    return (
      <View>
      {
        femaleSingles && femaleSingles.map(femaleSingle => {
          return femaleSingle.userId === userId && (
            <View style={styles.rowContainer} key={femaleSingle.id}>
              <View>
                <Text style={{ paddingTop: 10, fontWeight: 'bold', fontSize: 20 }}>{femaleSingle.year}</Text>
              </View>
              <View>
                <Text style={{ fontWeight: 'bold' }}>{femaleSingle.tournament}</Text>
                <Text>{femaleSingle.result}</Text>
              </View>
              <View>
                <Button bordered dark>
                  <Text>Edit</Text>
                </Button>
              </View>
            </View>
          )
        })
      }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 20
  }
});

export default FemaleSingles;
