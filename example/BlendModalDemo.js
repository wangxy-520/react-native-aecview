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
            <Text style={{color: '#333333', fontSize: 15}}>{content}</Text>
        );
    }

    /**
     * 编辑框
     * @param content
     */
    renderEditContent(content) {
        return (
            <View style={{flex:1}}>
                <Text style={{color: '#333333', fontSize: 16}}>{content}</Text>
            </View>
        );
    }

    /**
     * 选择框
     * @param content
     */
    renderSelectedContent(content) {
        return (
            <TouchableOpacity activeOpacity={0.5} onPress={this.onSelected.bind(this)}>
                <Text style={{color: '#222222', fontSize: 15}}>{content}</Text>
            </TouchableOpacity>
        );
    }

    /**
     * 选择事件
     */
    onSelected() {
        this.AecAlertMessageModal.showModal(3, this.renderAlertContent("数据处理中..."));
        setTimeout(() => {
            this.AecAlertMessageModal.closeModal();
        }, 1500);
    }

    /**
     * 确定事件
     */
    onOkModal() {

    }

    /**
     * 对话框关闭事件
     */
    onHidenModal() {

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
                                  onPress={() => this.AecAlertMessageModal.showModal(1, this.renderEditContent("编辑框测试"))}>
                    <Text style={{color: '#222222', fontSize: 15}}>编辑框</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} style={styles.rows}
                                  onPress={() => this.AecAlertMessageModal.showModal(2, this.renderSelectedContent("选择框测试"))}>
                    <Text style={{color: '#222222', fontSize: 15}}>选择框</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} style={styles.rows}
                                  onPress={() => this.AecAlertMessageModal.showModal(4, this.renderAlertContent("对话框测试"))}>
                    <Text style={{color: '#222222', fontSize: 15}}>对话框</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} style={styles.rows}
                                  onPress={() => this.AecAlertMessageModal.showModal(5, this.renderAlertContent("Sheet框测试"))}>
                    <Text style={{color: '#222222', fontSize: 15}}>Sheet框</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} style={styles.rows}
                                  onPress={() => this.AecAlertMessageModal.closeModal()}>
                    <Text style={{color: '#222222', fontSize: 15}}>关闭</Text>
                </TouchableOpacity>
                <AecAlertMessageModal ref={o => this.AecAlertMessageModal = o} okModal={this.onOkModal.bind(this)} hidenModal={this.onHidenModal.bind(this)}
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
