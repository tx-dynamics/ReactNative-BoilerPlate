import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { routes } from '../../constants'
import * as App from '../../../screens/appFlow';

const MyStack = createStackNavigator()
export class FavoriteStack extends Component {
    render() {
        return (
            <MyStack.Navigator initialRouteName={routes.favorite} screenOptions={{ headerShown: false }}>
                <MyStack.Screen name={routes.favorite} component={App.Favorite} />
            </MyStack.Navigator>
        )
    }
}
