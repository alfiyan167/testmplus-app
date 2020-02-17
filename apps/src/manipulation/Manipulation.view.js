// import plugin
import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView, TouchableOpacity, ScrollView } from 'react-native';
import ActionSheet from 'react-native-action-sheet';
import DateTimePickerModal from "react-native-modal-datetime-picker";

// import style
import styles from './Manipulation.style.js';

// import component
import InputComponent from '../../components/Input.component';
import ButtonComponent from '../../components/Button.component';

// import helper
import Loading from '../../helper/Loading.helper';

// export class
export default class ManipulationView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      option: []
    }
  }

  UNSAFE_componentWillReceiveProps(newProps) {
    if(newProps.type_of_book_opt) {
      this.setState({option: newProps.type_of_book_opt});
    }
  }

  getOption() {
    ActionSheet.showActionSheetWithOptions({
      options: this.state.option,
      tintColor: 'blue'
    },
    (buttonIndex) => {
      this.props.onChangeTextTypeOfBook(buttonIndex)
    });
  }
  
  render() {
    return (
      <ScrollView>
        <Loading loading={this.props.loading} />
        <View style={styles.content}>
          <InputComponent
            placeholder="Title"
            value={this.props.title}
            keyboardType="default"
            secureTextEntry={false}
            autoFocus={false}
            validation={this.props.title_validation}
            onChangeText={(text) => this.props.onChangeTextTitle(text)}
          />
          <InputComponent
            placeholder="Author"
            value={this.props.author}
            keyboardType="default"
            secureTextEntry={false}
            autoFocus={false}
            validation={this.props.author_validation}
            onChangeText={(text) => this.props.onChangeTextAuthor(text)}
          />
          <View>
            <TouchableOpacity activeOpacity={1} style={styles.btnInput} onPress={() => this.props.getDateModal()}>
              <DateTimePickerModal
                isVisible={this.props.isDatePublished}
                mode="date"
                onConfirm={this.props.getDatePublished}
                onCancel={() => this.props.getDatePublishedClose()}
              />
              {(this.props.date_published == '') && <Text style={styles.textPlaceholder}>Date Published</Text>}
              {(this.props.date_published != '') && <Text>{this.props.date_published}</Text>}
            </TouchableOpacity>
            {(this.props.date_published_validation === 'isEmpty') && <Text style={styles.textWarning}>This field is not empty</Text>}
          </View>
          <InputComponent
            placeholder="Number of Page"
            value={this.props.number_of_page}
            keyboardType="number-pad"
            secureTextEntry={false}
            autoFocus={false}
            validation={this.props.number_of_page_validation}
            onChangeText={(text) => this.props.onChangeTextNumberOfPage(text)}
          />
          <View>
            <TouchableOpacity activeOpacity={1} style={styles.btnInput} onPress={() => this.getOption()}>
              {(this.props.type_of_book == '') && <Text style={styles.textPlaceholder}>Type of Book</Text>}
              {(this.props.type_of_book != '') && <Text>{this.props.type_of_book}</Text>}
            </TouchableOpacity>
            {(this.props.id_type_of_book_validation === 'isEmpty') && <Text style={styles.textWarning}>This field is not empty</Text>}
          </View>
        </View>
        <View style={styles.rowBtn}>
          <ButtonComponent
            title="Submit"
            onPress={() => this.props.submit()}
          />
        </View>
      </ScrollView>
    );
  }
}