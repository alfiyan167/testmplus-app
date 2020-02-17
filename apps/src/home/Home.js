// import plugin
import React, { Component } from 'react';
import { Alert } from 'react-native';

// import API service
import ApiService from '../../services/online/Api.service';
import AsService from '../../services/offline/As.service';

// import view
import HomeView from './Home.view';

// export class
export default class Home extends Component {
  static navigationOptions = {
    title: 'List of Books',
  };

  constructor(props) {
    super(props);
    this.state = {
      books: [],
      isLoader: true,
      isRefresh: false,
      loading: false
    }
  }

  componentDidMount() {
    didFocus = this.props.navigation.addListener('didFocus', () => {
      this.setState({books: [], isLoader: true});
      setTimeout(()=>{
        this.getData();
      }, 500); 
    });
  }

  getData() {
    ApiService.getBook().then(res => {
      if(res.status == true) {
        this.setState({
          books: res.data,
          isLoader: false,
          isRefresh: false,
          loading: false
        });
      }else{
        this.setState({
          isLoader: false,
          isRefresh: false,
          loading: false
        });
      }
    });
  }

  onRefresh() {
    this.setState({isRefresh: true},
      this.getData()
    );
  }

  toDetail(item) {
    this.props.navigation.navigate('Detail', {
      item: item
    });
  }

  addData() {
    this.props.navigation.navigate('Manipulation');
  }

  editData(item) {
    AsService.getData('typeofbook').then(res => {
      this.props.navigation.navigate('Manipulation', {
        item: item,
        listofbooks: res
      });
    });
  }

  deleteData(item) {
    let data = {
      id_book: item. id_book
    }
    this.setState({loading: true});
    ApiService.deleteBook(data).then(res => {
      if(res.status == true) {
        this.getData();           
      }else{
        this.setState({loading: false});
      }
    });
  }

  toDetailByIndex(index, item) {
    if(index == 0) {
      this.editData(item);
    }else if(index == 1) {
      Alert.alert(
        'Confirm',
        'Will you delete this data ?',
        [
          {text: 'Delete', onPress: () => this.deleteData(item)},
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          }
        ],
        {cancelable: false},
      );
    }
  }

  render() {
    return (
      <HomeView 
        books={this.state.books}
        isLoader={this.state.isLoader}
        isRefresh={this.state.isRefresh}
        loading={this.state.loading}

        onRefresh={() => this.onRefresh()}
        toDetail={(item) => this.toDetail(item)}
        addData={() => this.addData()}
        toDetailByIndex={(index, item) => this.toDetailByIndex(index, item)}
      />
    );
  }
}