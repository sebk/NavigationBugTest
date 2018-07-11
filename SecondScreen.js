import {Component} from 'react';
import {Text} from "react-native";
import React from "react";

export class SecondScreen extends Component {

    static navigationOptions = {
        title: 'Second Screen'
    };

    render() {
        return (
            <Text>Second Screen</Text>
        );
    }

}