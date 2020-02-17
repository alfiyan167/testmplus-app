import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get("window");

export default StyleSheet.create({
  content: {
    paddingLeft: 15,
    paddingRight: 15
  },
  row: {
    flexDirection: 'row'
  },
  listlabel: {
    width: '40%',
    height: 50,
    justifyContent: 'center'
  },
  listContent: {
    width: '60%',
    height: 50,
    justifyContent: 'center'
  }
});