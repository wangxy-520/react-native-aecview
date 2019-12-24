import React, { Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    Modal, Dimensions, ActivityIndicator
} from 'react-native';
import PropTypes from 'prop-types';
import FontSizeUtils from "../utils/FontSizeUtils";
import HeightUtils from "../utils/HeightUtils";
import WidthUtils from "../utils/WidthUtils";
let modalWidth = Dimensions.get('window').width;

/**
 *  同时弹出多个消息框 wangxy
 *  Alert AecAlertModal AecAlertNoBtnModal Loading Sheet结合体
 */
 class AecAlertMessageModal extends Component {

    static defaultProps = {
        okModal: null,
        hidenModal: null,
        RatioWidth: 0.8,
        closeBtn: false,
        closeText: "取消",
        okText: "确定"
    }

    static propTypes = {
        okModal: PropTypes.func,
        hidenModal: PropTypes.func,
        RatioWidth: PropTypes.number,
        closeBtn: PropTypes.bool,
        closeText: PropTypes.string,
        okText: PropTypes.string
    }


    constructor(props) {
         super(props)
         this.state = {
             visible: false,
             modalType: 0,
             msgContent: null
         };
     }

    /**
     *
     * @param type 0 提示，1 编辑 2 选择 3 加载效果 4 无按钮可关闭对话框 5 Sheet框
     * @param msgContent
     */
     showModal(type, msgContent) {
        this.setState({
            modalType: type,
            msgContent: msgContent,
            visible: true
        });
    }

     /**
      *
      */
     closeModal() {
         this.setState({
             visible: false
         });
     }

     /**
      *
      */
     okModal() {
         switch (this.state.modalType) {
             case 0:
                 this.closeModal();
                 break;
             case 1:
                 if (this.props.okModal) {
                     this.props.okModal();
                 }
                 break;
             case 2:

                 break;
             case 3:

                 break;
             case 4:
                 this.closeModal();
                 if (this.props.hidenModal) {
                     this.props.hidenModal();
                 }
                 break;
             case 5:
                 this.closeModal();
                 break;
             default:
                 this.closeModal();
                 break;
         }
     }


    /**
     * wxy
     */
    renderTypeContent(){
      let  content = null;
      switch (this.state.modalType){
          case 1:
              content = <View style={[styles.background, {width: modalWidth * this.props.RatioWidth}]}>
                              {this.state.msgContent}
                              <View style={[styles.w_lines, {width: modalWidth * this.props.RatioWidth-WidthUtils.convert(4)}]}></View>
                              {this.renderEditBtn()}
                        </View>;
              break;
          case 2:
              content = <View style={[styles.background, {width: modalWidth * this.props.RatioWidth}]}>
                              {this.state.msgContent}
                        </View>;
              break;
          case 3:
              content = this.renderLoadingContent();
              break;
          case 4:
              content = this.renderAlertNoBtnContent();
              break;
          case 5:
              content = this.renderAlertSheetContent();
              break;
          default:
              content = this.renderAlertContent();
              break;
      }
      return content;
    }

    /**
     * Sheet框
     */
    renderAlertSheetContent(){
        return (
            <TouchableOpacity style={{flex: 1}} activeOpacity={1}  onPress={this.okModal.bind(this)}>
                <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
                    <View style={{width: modalWidth, backgroundColor: '#fff', minHeight:HeightUtils.convert(200)}}>
                        {this.state.msgContent}
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    /**
     * 加载框
     */
    renderLoadingContent(){
        return (
            <View style={styles.background}>
                <View style={styles.loading}>
                    <ActivityIndicator size={"large"} color="#3e9ce9"/>
                    {this.state.msgContent}
                </View>
            </View>
        );
    }


    /**
     * 无按钮提示框
     */
    renderAlertNoBtnContent(){
        return (
            <TouchableOpacity style={{flex: 1}} activeOpacity={1}  onPress={this.okModal.bind(this)}>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <View style={[styles.background, {width: modalWidth * 0.8}]}>
                        {this.state.msgContent}
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    /**
     * 提示框
     */
    renderAlertContent(){
           return (
               <View style={[styles.background, {width: modalWidth * 0.8}]}>
                   <View style={{width: modalWidth * 0.8, height:  HeightUtils.convert(85), justifyContent: 'center', alignItems: 'center'}}>
                       <Text style={{color: '#333333',fontSize: FontSizeUtils.convert(18),fontWeight:'bold'}}>提示</Text>
                   </View>
                   <View style={{width: modalWidth * 0.8, minHeight:  HeightUtils.convert(100), justifyContent: 'center', alignItems: 'center'}}>
                       {this.state.msgContent}
                   </View>
                   <View style={[styles.w_lines, {width: modalWidth * 0.8-WidthUtils.convert(4)}]}></View>
                   <TouchableOpacity activeOpacity={0.5} onPress={this.okModal.bind(this)}>
                       <View style={[styles.btn_onetext_container, {width: modalWidth * 0.8}]}>
                           <Text style={[styles.btn_text, {color: '#7481F5'}]}>{this.props.okText}</Text>
                       </View>
                   </TouchableOpacity>
               </View>
           );
    }

    /**
     * w x y
     * @returns {*}
     */
    renderEditBtn() {
        if (this.props.closeBtn) {
            return (
                <View style={[styles.btn_container, {width: modalWidth * this.props.RatioWidth}]}>
                    <TouchableOpacity activeOpacity={0.5} onPress={this.closeModal.bind(this)} visible={false}>
                        <View style={[styles.btn_text_container, {borderRightWidth: 1, borderRightColor: '#e5e5e5', width: (modalWidth * this.props.RatioWidth * 0.5)}]}>
                            <Text style={[styles.btn_text, {color: '#333333'}]}>{this.props.closeText}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5} onPress={this.okModal.bind(this)}>
                        <View style={[styles.btn_text_container, {width: (modalWidth * this.props.RatioWidth * 0.5)}]}>
                            <Text style={[styles.btn_text, {color: '#7481F5'}]}>{this.props.okText}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )
        } else {
            return (
                <View style={[styles.btn_container, {width: modalWidth * this.props.RatioWidth}]}>
                    <TouchableOpacity activeOpacity={0.5} onPress={this.okModal.bind(this)}>
                        <View style={[styles.btn_onetext_container, {width: modalWidth * this.props.RatioWidth}]}>
                            <Text style={[styles.btn_text, {color: '#7481F5'}]}>{this.props.okText}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            );
        }
    }

    /**
     *
     * @returns {*}
     */
     render() {
         return (
             <Modal
                 onRequestClose={() => this.okModal.bind(this)}
                 visible={this.state.visible}
                 transparent={true}>
                 <TouchableOpacity style={{flex: 1}} activeOpacity={1}>
                     <View style={styles.container}>
                         {this.renderTypeContent()}
                     </View>
                 </TouchableOpacity>
             </Modal>
         )
     }
 }

/**
 *
 */
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent:'center',
        alignItems:'center'
    },
    btn_text_container: {
        height:  HeightUtils.convert(85),
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn_onetext_container: {
        height:  HeightUtils.convert(85),
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn_text: {
        fontSize: FontSizeUtils.convert(16),
        fontWeight: 'normal'
    },
    w_lines: {
        height: HeightUtils.convert(2),
        backgroundColor: '#e5e5e5',
        position: 'absolute',
        bottom: HeightUtils.convert(85),
    },
    h_lines: {
        height:  HeightUtils.convert(85),
        width: HeightUtils.convert(2),
        backgroundColor: '#e5e5e5',
    },
    btn_container: {
        height:  HeightUtils.convert(85),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    background: {
        backgroundColor: '#fff',
        minHeight:HeightUtils.convert(200),
        borderColor: '#fff',
        borderRadius: WidthUtils.convert(4),
        borderWidth: WidthUtils.convert(2),
    },
    loading: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: WidthUtils.convert(10),
        minHeight: WidthUtils.convert(180),
        minWidth: WidthUtils.convert(180)
    }
})

export default AecAlertMessageModal;
