import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Text,
  Button
} from 'native-base';

class MaleDoubles extends React.Component {
  render() {
    const { userId, maleDoubles } = this.props;

    return (
      <View>
      {
        maleDoubles && maleDoubles.map(maleDouble => {
          return maleDouble.userId === userId && (
            <View style={styles.rowContainer} key={maleDouble.id}>
              <View>
                <Text style={{ paddingTop: 10, fontWeight: 'bold', fontSize: 20 }}>{maleDouble.year}</Text>
              </View>
              <View>
                <Text style={{ fontWeight: 'bold' }}>{maleDouble.tournament}</Text>
                <Text>{maleDouble.result}</Text>
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

export default MaleDoubles;
