// import plugin
import React, { Component } from 'react';
import { ScrollView , View, Text, ActivityIndicator, TouchableOpacity, FlatList } from 'react-native';
import { Container, Fab } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionSheet from 'react-native-action-sheet';

// import helper
import Loading from '../../helper/Loading.helper';

// import style
import styles from './Home.style.js';

const BUTTONS = [
  'Edit',
  'Delete'
];

// export class
export default class HomeView extends Component {
  loader(isLoader) {
    return isLoader == true ? (
      <View style={styles.loader}>
        <ActivityIndicator size="small" />
      </View>
    ) : null;
  }

  listEmpty(isLoader) {
    return (
      isLoader == false ?
      <View style={styles.conteinerEmpty}>
        <Text style={styles.textEmpty}>Pull to get data/refresh</Text>
      </View>
      : null
    );
  }
  
  getActionSheet(item) {
    ActionSheet.showActionSheetWithOptions({
      options:BUTTONS,
      tintColor: 'blue'
    },
    (buttonIndex) => {
      this.props.toDetailByIndex(buttonIndex, item);
    });
  }

  render() {
    return (
      <Container>
        {this.loader(this.props.isLoader)}
        <Loading loading={this.props.loading} />
        <FlatList
          style={{ flex: 1 }}
          ref={(ref) => { this.flatListRef = ref; }}
          keyExtractor={(item, index) => index.toString()}
          data={this.props.books}
          renderItem={(data) => {
            const item = data.item;
            return (
              <TouchableOpacity style={styles.list}>
                <TouchableOpacity style={styles.boxList} onPress={() => this.props.toDetail(item)}>
                  <Text numberOfLines={1} ellipsizeMode='tail'>{item.title}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnMore} onPress={() => this.getActionSheet(item)}>
                  <Icon name="md-more" size={25} />
                </TouchableOpacity>
              </TouchableOpacity>
            )
          }}
          onRefresh={() => this.props.onRefresh()}
          refreshing={this.props.isRefresh}
          ListEmptyComponent={() => this.listEmpty(this.props.isLoader)}
        />
        <Fab
          active={true}
          direction="up"
          containerStyle={{ }}
          style={{ backgroundColor: '#5067FF' }}
          position="bottomRight"
          onPress={() => this.props.addData()}>
          <Text>+</Text>
        </Fab>
      </Container>
    );
  }
}