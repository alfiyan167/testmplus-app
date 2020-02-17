// import plugin
import React, { Component } from 'react';
import { View, Text } from 'react-native';

// import API service
import ApiService from '../../services/online/Api.service';

// import view
import AboutView from './About.view';

// export class
export default class About extends Component {
  static navigationOptions = {
    title: 'About',
  };

  render() {
    return (
      <AboutView />
    );
  }
}