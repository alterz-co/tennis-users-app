import React, { Component } from 'react';
import { View } from 'react-native';
import {
  Form,
  Item,
  Input,
  Picker,
  Text,
  Button,
  Icon,
  Spinner
} from 'native-base';
import { connect } from 'react-redux';
import { editProfile } from '../../redux/actions/userActions';

class ProfileEditForm extends Component {

  state = {
    name: this.props.profile.name,
    gender: this.props.profile.gender,
    age: this.props.profile.age,
    nationality: this.props.profile.nationality,
    phone: this.props.profile.phone
  }

  onButtonPress = () => {
    const profile = {
      name: this.state.name,
      gender: this.state.gender,
      age: this.state.age,
      nationality: this.state.nationality,
      phone: this.state.phone
    }

    this.props.editProfile(this.props.userId, profile);
  }

  render(){
    const { userId, profile } = this.props;

    if(!userId && profile){
      return <Spinner color='grey'/>
    }

    return(
      <View>
        <Form style={{ padding: 20 }}>
          <Item regular style={{ marginTop: 20 }}>
            <Input
              placeholder='Name'
              autoCorrect={false}
              autoCapitalize='none'
              value={this.state.name}
              onChangeText={name => this.setState({ name })}
            />
          </Item>
          <Item picker style={{ marginTop: 20 }}>
            <Picker
                mode="dropdown"
                iosIcon={<Icon name="ios-arrow-down" />}
                style={{ width: undefined }}
                placeholder="Gender"
                placeholderStyle={{ color: "black" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.gender}
                onValueChange={(value: string) => this.setState({ gender: value })}
              >
                <Picker.Item label="Male" value="Male" />
                <Picker.Item label="Female" value="Female" />
              </Picker>
          </Item>
          <Item regular style={{ marginTop: 20 }}>
            <Input
              placeholder='Age'
              autoCorrect={false}
              autoCapitalize='none'
              value={this.state.age}
              onChangeText={age => this.setState({ age })}
            />
          </Item>
          <Item regular style={{ marginTop: 20 }}>
            <Input
              placeholder='Nationality'
              autoCorrect={false}
              autoCapitalize='none'
              value={this.state.nationality}
              onChangeText={nationality => this.setState({ nationality })}
            />
          </Item>
          <Item regular style={{ marginTop: 20 }}>
            <Input
              placeholder='Phone number'
              autoCorrect={false}
              autoCapitalize='none'
              value={this.state.phone}
              onChangeText={phone => this.setState({ phone })}
            />
          </Item>
          <Button
            full
            rounded
            dark
            style={{ marginTop: 50 }}
            onPress={this.onButtonPress}>
            <Text style={{ color: 'white' }}>Save</Text>
          </Button>
        </Form>
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editProfile: (userId, profile) => dispatch(editProfile(userId, profile))
  }
}

export default connect(null, mapDispatchToProps)(ProfileEditForm);
