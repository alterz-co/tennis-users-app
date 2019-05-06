import React, { Component } from 'react';
import {
  Container,
  Tab,
  Tabs,
} from 'native-base';
import Male from './Male';
import Female from './Female';

class Players extends Component {
  render(){
    return(
      <Container style={{ paddingTop: 20 }}>
        <Tabs tabBarUnderlineStyle={{ backgroundColor: 'black' }}>
          <Tab
            heading='Male'
            tabStyle={{ backgroundColor: 'white' }}
            activeTabStyle={{ backgroundColor: 'white' }}
            activeTextStyle={{ color: 'black' }}
          >
            <Male/>
          </Tab>
          <Tab
            heading='Female'
            tabStyle={{ backgroundColor: 'white' }}
            activeTabStyle={{ backgroundColor: 'white' }}
            activeTextStyle={{ color: 'black' }}
          >
            <Female/>
          </Tab>
        </Tabs>
      </Container>
    )
  }
}

export default Players;
