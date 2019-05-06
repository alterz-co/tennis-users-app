import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Text,
  Button
} from 'native-base';

class FemaleDoubles extends React.Component {
  render() {
    const { userId, femaleDoubles } = this.props;

    return (
      <View>
      {
        femaleDoubles && femaleDoubles.map(femaleDouble => {
          return femaleDouble.userId === userId && (
            <View style={styles.rowContainer} key={femaleDouble.id}>
              <View>
                <Text style={{ paddingTop: 10, fontWeight: 'bold', fontSize: 20 }}>{femaleDouble.year}</Text>
              </View>
              <View>
                <Text style={{ fontWeight: 'bold' }}>{femaleDouble.tournament}</Text>
                <Text>{femaleDouble.result}</Text>
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

export default FemaleDoubles;
