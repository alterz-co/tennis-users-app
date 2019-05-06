import React, { Component } from 'react';
import {
  Container,
  Header,
  Left,
  Right,
  Body,
  Title,
  Content,
  Form,
  Item,
  Input,
  Picker,
  Text,
  Button,
  Icon
} from 'native-base';
import { connect } from 'react-redux';
import { addTournament } from '../../../redux/actions/userActions';

class UserTournamentsAdd extends Component {

  state = {
    tournament: '',
    year: '',
    category: '',
    result: ''
  }

  onButtonPress = () => {
    try {
      if(this.state.tournament === ''){
        alert('Please enter tournament')
        return;
      }
      if(this.state.year === ''){
        alert('Please enter the year')
        return;
      }
      if(this.state.category === ''){
        alert('Please enter the category')
        return;
      }
      if(this.state.result === ''){
        alert('Please enter the result')
        return;
      }
      const year = Number(this.state.year);
      const tournament = {
        tournament: this.state.tournament,
        year,
        category: this.state.category,
        result: this.state.result
      }
      this.props.addTournament(tournament);
      this.setState({
        tournament: '',
        year: '',
        category: '',
        result: ''
      });
    }

    catch(error){
      alert('Error')
      return;
    }
  }

  render(){
    return(
      <Container>
        <Header>
          <Left>
            <Button iconLeft transparent dark onPress={() => this.props.navigation.goBack()}>
              <Icon name='ios-arrow-back' />
              <Text>Back</Text>
            </Button>
          </Left>
          <Body></Body>
          <Right></Right>
        </Header>
        <Content padding>
          <Title style={{ fontSize: 30, marginTop: 40 }}>Add Tournament</Title>
          <Form style={{ padding: 20 }}>
            <Item regular style={{ marginTop: 20 }}>
              <Input
                placeholder='Tournament'
                autoCorrect={false}
                autoCapitalize='none'
                value={this.state.tournament}
                onChangeText={tournament => this.setState({ tournament })}
              />
            </Item>
            <Item picker style={{ marginTop: 20 }}>
              <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="ios-arrow-down" />}
                  style={{ width: undefined }}
                  placeholder="Year *"
                  placeholderStyle={{ color: "black" }}
                  placeholderIconColor="#007aff"
                  selectedValue={this.state.year}
                  onValueChange={(value: string) => this.setState({ year: value })}
                >
                  <Picker.Item label="2019" value="2019" />
                  <Picker.Item label="2018" value="2018" />
                  <Picker.Item label="2017" value="2017" />
                  <Picker.Item label="2016" value="2016" />
                  <Picker.Item label="2015" value="2015" />
                </Picker>
            </Item>
            <Item picker style={{ marginTop: 20 }}>
              <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="ios-arrow-down" />}
                  style={{ width: undefined }}
                  placeholder="Category *"
                  placeholderStyle={{ color: "black" }}
                  placeholderIconColor="#007aff"
                  selectedValue={this.state.category}
                  onValueChange={(value: string) => this.setState({ category: value })}
                >
                  <Picker.Item label="Male Singles" value="Male Singles" />
                  <Picker.Item label="Female Singles" value="Female Singles" />
                  <Picker.Item label="Male Doubles" value="Male Doubles" />
                  <Picker.Item label="Female Doubles" value="Female Doubles" />
                </Picker>
            </Item>
            <Item picker style={{ marginTop: 20 }}>
              <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="ios-arrow-down" />}
                  style={{ width: undefined }}
                  placeholder="Result *"
                  placeholderStyle={{ color: "black" }}
                  placeholderIconColor="#007aff"
                  selectedValue={this.state.result}
                  onValueChange={(value: string) => this.setState({ result: value })}
                >
                  <Picker.Item label="Winner" value="Winner" />
                  <Picker.Item label="Finalist" value="Finalist" />
                  <Picker.Item label="Semi-Finalist" value="Semi-Finalist" />
                  <Picker.Item label="Quarter-Finalist" value="Quarter-Finalist" />
                  <Picker.Item label="R16" value="R16" />
                  <Picker.Item label="R32" value="R32" />
                  <Picker.Item label="R64" value="R64" />
                  <Picker.Item label="R128" value="R128" />
                </Picker>
            </Item>
            <Button
              style={{ marginTop: 50 }}
              full
              rounded
              dark
              onPress={this.onButtonPress}
            >
              <Text style={{ color: 'white' }}>Add</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTournament: (tournament) => dispatch(addTournament(tournament))
  }
}

export default connect(null, mapDispatchToProps)(UserTournamentsAdd);
