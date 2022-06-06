import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screens} from '../Constants';
import GetStartedScreen from '../screens/gettingStartScreen/GetStartedScreen';
import LoginScreen from '../screens/loginSreen/LoginScreen';

const AuthStack = ({navigation})=>{
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName={Screens.TabScreen}>
            <Stack.Screen name={Screens.GetStartedScreen} component={GetStartedScreen} options={{headerShown:false}}/>
            <Stack.Screen name={Screens.LoginScreen} component={LoginScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}

export default AuthStack
