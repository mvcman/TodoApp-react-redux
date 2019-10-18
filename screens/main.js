import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import Screen1 from './screen1';
import Screen2 from './screen2';

const Main = createStackNavigator({
    Screen1: { screen: Screen1 },
    Screen2: { screen: Screen2 }
},{
    initialRouteName: 'Screen1',
    navigationOptions: ({ navigation }) => ({
        headerStyle:{
            backgroundColor: '#3745D5',
            height: 30,
            padding: 20
        },
        headerTitleStyle: {
            color: "#fff",
            fontSize: 40,
            fontWeight: 'normal'
        },
        headerTintColor: 'white'
})
});

export default class MyApp extends Component {
    render(){
        return(
            <Main />
        );
    }
}