import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class Screen2 extends Component {

    static navigationOptions = {
        title: `Screen2`
    }

    render(){
        return(
            <View style={Styles.container}>
                <Text>Inside Screen2</Text>
                <TouchableOpacity><Text>Prev</Text></TouchableOpacity>
            </View>
        );
    }
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});