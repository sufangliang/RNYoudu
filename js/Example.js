import React, { Component } from 'react';
import {
    StyleSheet,
    View
} from 'react-native';

export default class myclass  extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
