import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// import service
import AsService from './apps/services/offline/As.service';
import ApiService from './apps/services/online/Api.service';

// import src component
import Home from './apps/src/home/Home';
import About from './apps/src/about/About';
import Detail from './apps/src/detail/Detail';
import Manipulation from './apps/src/manipulation/Manipulation';

const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  About: {screen: About},
  Detail: {screen: Detail},
  Manipulation: {screen: Manipulation}
},{
  initialRouteName: 'Home',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
});

const RootStack  = createAppContainer(MainNavigator);

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    ApiService.getTypeOfBook().then(res => {
      if(res.status == true) {
        AsService.saveData('typeofbook', res.data);
      }
    });
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <RootStack  />
      </SafeAreaView>  
    );
  }
}