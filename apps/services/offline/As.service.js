import AsyncStorage from '@react-native-community/async-storage';

//save data
saveData = async (key, item) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(item));
    return true;
  } catch (error) {
    return false;
  }
};

//get data
getData = async (key) => {
  try {
    const retrievedItem =  await AsyncStorage.getItem(key);
    const item = JSON.parse(retrievedItem);
    return item;
  } catch (error) {
    console.log(error.message);
  }
}

//remove data
removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (error) {
    return false;
  }
}

//remove multi data
removeMultiData = async () => {
  try {
    let keys = ['mobileSession'];
    await AsyncStorage.multiRemove(keys);
    return true;
  } catch (error) {
    return false;
  }
}

class asService {
  constructor() {
    this.saveData = saveData;
    this.getData = getData;
    this.removeData = removeData;
    this.removeMultiData = removeMultiData;
  }
}
const AsService = new asService();
export default AsService;