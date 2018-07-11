import React from 'react'
import {createDrawerNavigator} from "react-navigation";
import StackNavigator from "./StackNavigator";

export default createDrawerNavigator({

    StackNavigator: {
        screen: StackNavigator
    }
});