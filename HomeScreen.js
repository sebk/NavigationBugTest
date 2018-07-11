import React from 'react';
import {Text, TouchableHighlight, View, StyleSheet} from "react-native";


export default class HomeScreen extends React.Component {

    static navigationOptions = {
        title: 'HOME',
    };

    constructor(props) {
        super(props);
        this.state = {
            isButtonPressed: false
        };
    }

    componentDidMount() {
        this.subs = [
            this.props.navigation.addListener('willFocus', payload => {
                console.log('>>> willFocus');
                this._deselectButton(false)}),

            this.props.navigation.addListener('didFocus', () => {
                console.log('>>> didFocus');
                this._deselectButton(false)}),

            // this.props.navigation.addListener('didBlur', () => {
            //     console.log('willBlur');
            //     this._deselectButton(false)}),
        ];
    }

    componentWillUnmount() {
        this.subs.forEach((sub) => {
            sub.remove();
        });
    }

    _navigateToSecondScreen = () => {
        this.props.navigation.navigate("SecondScreen");

        this._changeButtonPressedState(true);
    };

    _changeButtonPressedState(pressed) {
        this.setState((prevState) => {
            return {
                ...prevState,
                isButtonPressed: pressed
            };
        });
    }

    _deselectButton() {
        if (this.state.isButtonPressed) {
            this._changeButtonPressedState(false)
        }
    }

    render() {
        console.log('RENDER');
        return (
            <TouchableHighlight
                style={this.state.isButtonPressed ? styles.buttonPressed : styles.button}
                //style={!this.props.navigation.isFocused() ? styles.buttonPressed : styles.button}
                underlayColor={'#E1E4E6'}
                activeOpacity={1}
                onPress={this._navigateToSecondScreen}>
                <View style={styles.buttonContent}>
                    <Text style={styles.buttonText}>OPEN PAGE</Text>
                </View>
            </TouchableHighlight>

        )

    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        flex: 0,
        backgroundColor: 'white'
    },
    buttonPressed: {
        flex: 0,
        backgroundColor: 'red'
    },
    buttonText: {
        color: '#000000',
        fontSize: 16,
        lineHeight: 21,
        marginLeft: 15,
        marginTop: 13,
        marginBottom: 13
    },
    buttonContent: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});