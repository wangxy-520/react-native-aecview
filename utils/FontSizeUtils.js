import {Platform, PixelRatio} from 'react-native';
let modalWidth = Dimensions.get('window').width;
let modalHeight = Dimensions.get('window').height;

let w2 = 720 / 2;
let h2 = 1280 / 2;
let scale = Math.min(modalHeight / h2, modalWidth / w2);
/**
 * wangxy
 * @param sizeDp
 * @returns {*}
 */
const convert = (sizeDp) => {
    if (Platform.OS == 'ios') {
        return Math.round(sizeDp * scale-0.5);
    } else {
        return sizeDp;
    }
};
export default {
    convert
};
