import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  loader: {
    marginTop: 25
  },
  list: {
    // paddingTop: 25,
    // paddingBottom: 25,
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey',
    flexDirection: 'row'
  },
  boxList: {
    height: 50,
    width: width - 65,
    justifyContent: 'center',
  },
  btnMore: {
    height: 50,
    width: 35,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loader: {
    marginTop: 30
  },
  conteinerEmpty: {
    height: height - 150,
    width: width,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textEmpty: {
    color: 'grey'
  }
});