import React, { Component } from 'react';
import { View } from 'react-native';
import {
  Container,
  Header,
  Body,
  Title,
  Content,
  CardItem,
  Text,
  Spinner
} from 'native-base';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import moment from 'moment';
import HTMLView from 'react-native-htmlview';

class Announcements extends Component {
  render(){
    const { announcements } = this.props;

    if(!announcements){
      return <Spinner color='grey'/>
    }

    return(
      <Container>
        <Header>
          <Body>
            <Title>Announcements</Title>
          </Body>
        </Header>
        <Content padder>
        {
          announcements && announcements.map(announcement => {
            return(
              <View style={{ padding: 10 }} key={announcement.id}>
                <CardItem header>
                  <View>
                    <Text>{announcement.title}</Text>
                    <Text note style={{ color: 'grey', fontSize: 12 }}>
                      {moment(announcement.createdAt.toDate()).calendar()}
                    </Text>
                  </View>
                </CardItem>
                <CardItem>
                  <HTMLView value={announcement.body}/>
                </CardItem>
              </View>
            )
          })
        }
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    announcements: state.firestore.ordered.announcements
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'announcements', orderBy: ['createdAt', 'desc'] }
  ])
)(Announcements);
