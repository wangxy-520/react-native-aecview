let modalWidth = Dimensions.get('window').width;
/**
 * wangxy
 * UI设计按照1280*720分辨率来设计ui的，所以我们以这个分辨率为参考标准
 * @param width px
 * @returns {*}
 */
const convert = (width) => {
    return modalWidth * (width / 720);
};
export default {
    convert
};
