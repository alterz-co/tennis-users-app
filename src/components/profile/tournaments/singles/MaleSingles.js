import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Text,
  Button
} from 'native-base';

class MaleSingles extends Component {
  render() {
    const { userId, maleSingles } = this.props;

    return (
      <View>
      {
        maleSingles && maleSingles.map(maleSingle => {
          return maleSingle.userId === userId && (
            <View style={styles.rowContainer} key={maleSingle.id}>
              <View>
                <Text style={{ paddingTop: 10, fontWeight: 'bold', fontSize: 20 }}>{maleSingle.year}</Text>
              </View>
              <View>
                <Text style={{ fontWeight: 'bold' }}>{maleSingle.tournament}</Text>
                <Text>{maleSingle.result}</Text>
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

export default MaleSingles;
