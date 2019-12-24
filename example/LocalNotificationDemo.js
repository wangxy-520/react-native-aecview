import React from "react";
import {StyleSheet} from "react-native";
import {AecLocalNotification} from 'react-native-aecview';
/**
 * wangxy
 * 本地消息控件实例
 */
class BlendModalDemo extends React.Component {

    /**
     *
     */
    render() {
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.5} style={styles.rows}
                              onPress={null}>
                <Text style={{color: '#222222', fontSize: 15}}>本地消息</Text>
            </TouchableOpacity>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6f6f6'
    }
});

export default BlendModalDemo;
