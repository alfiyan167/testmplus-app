import { ToastAndroid } from 'react-native';

async function getToast(message) {
  ToastAndroid.show(message, ToastAndroid.LONG); 
}

class toastWarning {
  constructor() {
    this.getToast = getToast;
  }
}
const Toaster = new toastWarning();
export default Toaster;