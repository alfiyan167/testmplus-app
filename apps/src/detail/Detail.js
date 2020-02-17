// import plugin
import React, { Component } from 'react';
import { View, Text } from 'react-native';

// import API service
import ApiService from '../../services/online/Api.service';

// import view
import DetailView from './Detail.view';

// export class
export default class Detail extends Component {
  static navigationOptions = {
    title: 'Detail',
  };

  constructor(props) {
    super(props);
    this.state = {
      item: {}
    }
  }

  componentDidMount() {
    let item = this.props.navigation.getParam('item', null);
    console.log(item);
    if(item) {
      this.setState({item: item});
    }
  }

  render() {
    return (
      <DetailView
        item={this.state.item}
      />
    );
  }
}