import React from "react";
import {
    StyleSheet, Text, TouchableOpacity, View, Dimensions
} from "react-native";
import {AecAlertMessageModal} from 'react-native-aecview';

/**
 * wangxy
 * 混合对话框控件实例
 */
class BlendModalDemo extends React.Component {

    /**
     *
     * @param content
     */
    renderAlertContent(content) {
        return (
            <Text style={{color: '#333333', fontSize: 16}}>{content}</Text>
        );
    }

    /**
     *
     * @returns {*}
     */
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity activeOpacity={0.5} style={styles.rows}
                                  onPress={() => this.AecAlertMessageModal.showModal(0, this.renderAlertContent("提示框测试"))}>
                    <Text style={{color: '#222222', fontSize: 15}}>提示框</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} style={styles.rows}
                                  onPress={() => this.AecAlertMessageModal.showModal(3, this.renderAlertContent("加载中..."))}>
                    <Text style={{color: '#222222', fontSize: 15}}>加载框</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} style={styles.rows}
                                  onPress={() => this.AecAlertMessageModal.closeModal()}>
                    <Text style={{color: '#222222', fontSize: 15}}>关闭</Text>
                </TouchableOpacity>
                <AecAlertMessageModal ref={o => this.AecAlertMessageModal = o} okModal={null} hidenModal={null}
                                      closeText={'取消'} okText={'提交'} closeBtn={true} RatioWidth={0.8}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6f6f6'
    },
    rows: {
        height: 50,
        width: Dimensions.get('window').width,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default BlendModalDemo;
