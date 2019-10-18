import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class Screen1 extends Component {

    static navigationOptions = {
        title: `Screen1`
    }

    render(){
        return(
            <View style={Styles.container}>
                <Text>Inside Screen1</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Screen2')}><Text>Next</Text></TouchableOpacity>
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