// import plugin
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import moment from 'moment';

// import API service
import ApiService from '../../services/online/Api.service';
import AsService from '../../services/offline/As.service';

// import view
import ManipulationView from './Manipulation.view';

// export class
export default class Manipulation extends Component {
  static navigationOptions = {
    title: 'Manipulation',
  };

  constructor(props) {
    super(props);
    this.state = {
      id_book: '',
      title: '',
      title_validation: '',
      author: '',
      author_validation: '',
      date_published: '',
      date_published_validation: '',
      isDatePublished: false,  
      number_of_page: '',
      number_of_page_validation: '',
      type_of_book_arr: [],
      type_of_book_opt: [],
      id_type_of_book: '',
      type_of_book: '',
      id_type_of_book_validation: '',
      loading: false
    }
  }

  componentDidMount() {
    this.getTypeOfBook();
    let item = this.props.navigation.getParam('item', null);
    let listofbooks = this.props.navigation.getParam('listofbooks', null);
    if(item && listofbooks) {
      let tempofobj = listofbooks.filter(obj => {return obj.type_of_book === item.type_of_book}); 
      this.setState({
        id_book: item.id_book,
        title: item.title,
        title_validation: 'isTrue',
        author: item.author,
        author_validation: 'isTrue',
        date_published: moment(item.date_published).format('YYYY-MM-DD'),
        date_published_validation: 'isTrue',
        number_of_page: item.number_of_page,
        number_of_page_validation: 'isTrue',
        id_type_of_book: tempofobj[0].id_type_of_book,
        type_of_book: tempofobj[0].type_of_book,
        id_type_of_book_validation: 'isTrue'
      });
    }
  }

  getTypeOfBook() {
    AsService.getData('typeofbook').then(res => {
      // console.log(res);
      let temp = [];
      for(let i in res) {
        temp.push(res[i].type_of_book);
      }
      this.setState({type_of_book_arr: res, type_of_book_opt: temp});
    });
  }

  onChangeTextTitle(text) {
    if(text.length > 0) {
      this.setState({
        title: text,
        title_validation: 'isTrue'
      });
    }else{
      this.setState({
        title: '',
        title_validation: 'isEmpty'
      });
    }
  }

  onChangeTextAuthor(text) {
    if(text.length > 0) {
      this.setState({
        author: text,
        author_validation: 'isTrue'
      });
    }else{
      this.setState({
        author: '',
        author_validation: 'isEmpty'
      });
    }
  }

  getDateModal() {
    this.setState({isDatePublished: true});
  }

  getDatePublished(date) {
    let text = moment(date).format('YYYY-MM-DD');
    this.setState({
      date_published: text,
      date_published_validation: 'isTrue'
    });
    this.getDatePublishedClose();
  }

  getDatePublishedClose() {
    this.setState({isDatePublished: false});
  }

  onChangeTextNumberOfPage(text) {
    if(text.length > 0) {
      if(isNaN(text)) {
        this.setState({
          number_of_page: text,
          number_of_page_validation: 'isNumber',
        });
      }else{
        this.setState({
          number_of_page: text,
          number_of_page_validation: 'isTrue',
        });
      }      
    }else{
      this.setState({
        number_of_page: '',
        number_of_page_validation: 'isEmpty'
      });
    }
  }

  onChangeTextTypeOfBook(value) {
    if(value != undefined) {
      let id = this.state.type_of_book_arr[value].id_type_of_book;
      let text = this.state.type_of_book_arr[value].type_of_book;
      this.setState({
        id_type_of_book: id,
        type_of_book: text,
        id_type_of_book_validation: 'isTrue'
      });
    }
  }

  submit() {
    if(this.state.title_validation == 'isTrue' && this.state.author_validation == 'isTrue' && this.state.date_published_validation == 'isTrue' && this.state.number_of_page_validation == 'isTrue' && this.state.id_type_of_book_validation == 'isTrue') {
      let data = {
        id_book: this.state.id_book,
        title: this.state.title,
        author: this.state.author,
        date_published: this.state.date_published,
        number_of_page: this.state.number_of_page,
        id_type_of_book: this.state.id_type_of_book
      }      

      this.setState({loading: true});
      if(this.state.id_book) {
        ApiService.updateBook(data).then(res => {
          if(res.status == true) {
            this.setState({loading: false});
            this.props.navigation.goBack(null)            
          }else{
            this.setState({loading: false});
          }
        });
      }else{
        ApiService.insertBook(data).then(res => {
          if(res.status == true) {
            this.setState({loading: false});
            this.props.navigation.goBack(null)            
          }else{
            this.setState({loading: false});
          }
        });
      }
    }else if(this.state.title_validation != 'isTrue') {
      this.setState({title_validation: 'isEmpty'});
    }else if(this.state.author_validation != 'isTrue') {
      this.setState({author_validation: 'isEmpty'});
    }else if(this.state.date_published_validation != 'isTrue') {
      this.setState({date_published_validation: 'isEmpty'});
    }else if(this.state.number_of_page_validation != 'isTrue') {
      this.setState({number_of_page_validation: 'isEmpty'});
    }else if(this.state.id_type_of_book_validation != 'isTrue') {
      this.setState({id_type_of_book_validation: 'isEmpty'});
    }
  }

  render() {
    return (
      <ManipulationView
        title={this.state.title}
        title_validation={this.state.title_validation}
        author={this.state.author}
        author_validation={this.state.author_validation}
        date_published={this.state.date_published}
        date_published_validation={this.state.date_published_validation}
        isDatePublished={this.state.isDatePublished}
        number_of_page={this.state.number_of_page}    
        number_of_page_validation={this.state.number_of_page_validation}    
        type_of_book_arr={this.state.type_of_book_arr}
        type_of_book_opt={this.state.type_of_book_opt}
        id_type_of_book={this.state.id_type_of_book}
        type_of_book={this.state.type_of_book}
        id_type_of_book_validation={this.state.id_type_of_book_validation}
        loading={this.state.loading}

        onChangeTextTitle={(text) => this.onChangeTextTitle(text)}
        onChangeTextAuthor={(text) => this.onChangeTextAuthor(text)}
        getDateModal={() => this.getDateModal()}
        getDatePublished={(date) => this.getDatePublished(date)}
        getDatePublishedClose={() => this.getDatePublishedClose()}
        onChangeTextNumberOfPage={(text) => this.onChangeTextNumberOfPage(text)}
        onChangeTextTypeOfBook={(value) => this.onChangeTextTypeOfBook(value)}
        submit={() => this.submit()}
      />
    );
  }
}