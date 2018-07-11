import React from 'react';
import {createStackNavigator} from "react-navigation";
import BackButton from "./BackButton";
import HomeScreen from "./HomeScreen";


const StackNavigator = createStackNavigator({

    HomeScreen: {
        screen: HomeScreen
    }

}, {
    navigationOptions: ({navigation}) => {
        return {
            headerTintColor: '#004666',
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 22,
            },
            headerLeft: () => (<BackButton onPress={() => navigation.goBack(null)}/>),
            headerStyle: {
                borderBottomColor: 'transparent',
                shadowOpacity: 0.40,
                shadowOffset: {
                    height: 0,
                },
                shadowRadius: 4,
            }
        }
    }
});

StackNavigator.navigationOptions = ({navigation}) => {
    let drawerLockMode = 'unlocked';
    if (navigation.state.index > 0) {
        drawerLockMode = 'locked-closed';
    }
    return {
        drawerLockMode
    };
};

export default StackNavigator