import React, {Component} from "react";
import {Text, TouchableOpacity} from "react-native";

export default class BackButton extends Component {

    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <Text>Back</Text>
            </TouchableOpacity>
        )
    }

}