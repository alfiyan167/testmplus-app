import { ToastAndroid } from 'react-native';

var Url = 'https://bookapp-api.000webhostapp.com';

function headers() {
  return {
    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
    'Authorization': 'Basic 56265883.0bd9.4623.a532.bee66946449a'
  }
}

function dataParser(data) {
  var formBody = [];
  for (var property in data) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(data[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  return formBody = formBody.join("&");
}

function getTypeOfBook() {
  return fetch(Url+'/type_of_book/get_type_of_book', {
    method: 'GET',
    headers: headers()
  }).then((response) => response.json()).then((resJson) => { 
    if(resJson.status === true) {
      return {
        status: true,
        data: resJson.data
      }
    }else{
      ToastAndroid.show('Process Failed', ToastAndroid.LONG);
      return {status: false}
    }
  })
  .catch((err) => {
    return {status: false}
  });
}

function getBook() {
  return fetch(Url+'/book/get_book', {
    method: 'GET',
    headers: headers()
  }).then((response) => response.json()).then((resJson) => { 
    if(resJson.status === true) {
      return {
        status: true,
        data: resJson.data
      };
    }else{
      ToastAndroid.show('Process Failed', ToastAndroid.LONG);
      return {status: false};
    }
  })
  .catch((err) => {
    return {status: false};
  });
}

function insertBook(data) {
  return fetch(Url+'/book/insert_book', {
    method: 'POST',
    headers: headers(),
    body: dataParser(data)
  }).then((response) => response.json()).then((resJson) => { 
    if(resJson.status === true) {
      ToastAndroid.show(resJson.message, ToastAndroid.LONG);
      return {status: true};
    }else{
      ToastAndroid.show(resJson.message, ToastAndroid.LONG);
      return {status: false};
    }
  })
  .catch((err) => { 
    return {status: false};
  });
}

function updateBook(data) {
  return fetch(Url+'/book/update_book', {
    method: 'POST',
    headers: headers(),
    body: dataParser(data)
  }).then((response) => response.json()).then((resJson) => { 
    if(resJson.status === true) {
      ToastAndroid.show(resJson.message, ToastAndroid.LONG);
      return {status: true};
    }else{
      ToastAndroid.show(resJson.message, ToastAndroid.LONG);
      return {status: false};
    }
  })
  .catch((err) => { 
    return {status: false};
  });
}

function deleteBook(data) {
  return fetch(Url+'/book/delete_book', {
    method: 'POST',
    headers: headers(),
    body: dataParser(data)
  }).then((response) => response.json()).then((resJson) => { 
    if(resJson.status === true) {
      ToastAndroid.show(resJson.message, ToastAndroid.LONG);
      return {status: true};
    }else{
      ToastAndroid.show(resJson.message, ToastAndroid.LONG);
      return {status: false};
    }
  })
  .catch((err) => { 
    return {status: false};
  });
}


class apiService {
  constructor() {
    this.getTypeOfBook = getTypeOfBook; 
    this.getBook = getBook; 
    this.insertBook = insertBook;
    this.updateBook = updateBook;
    this.deleteBook = deleteBook;
  }
}
const ApiService = new apiService();
export default ApiService;