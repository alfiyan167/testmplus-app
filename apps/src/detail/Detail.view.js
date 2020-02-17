// import plugin
import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Container, Header, Content, Button, List, ListItem, Fab } from 'native-base';

// import style
import styles from './Detail.style.js';

// export class
export default class DetailView extends Component {
  render() {
    return (
      <Container>
        <ScrollView style={styles.content}>
          <View style={styles.row}>
            <View style={styles.listlabel}>
              <Text>Title</Text>
            </View>
            <View style={styles.listContent}>
              <Text>: {this.props.item.title}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.listlabel}>
              <Text>Author</Text>
            </View>
            <View style={styles.listContent}>
              <Text>: {this.props.item.author}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.listlabel}>
              <Text>Date Published</Text>
            </View>
            <View style={styles.listContent}>
              <Text>: {this.props.item.date_published}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.listlabel}>
              <Text>Number of Page</Text>
            </View>
            <View style={styles.listContent}>
              <Text>: {this.props.item.number_of_page}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.listlabel}>
              <Text>Type of Book</Text>
            </View>
            <View style={styles.listContent}>
              <Text>: {this.props.item.type_of_book}</Text>
            </View>
          </View>  
        </ScrollView>
      </Container>
    );
  }
}