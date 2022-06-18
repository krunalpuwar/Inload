import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Onboarding from '../screens/Onboarding'
import HomeScreen from '../screens/HomeScreen'
import LoginScreen from '../screens/LoginScreen'
import BottomTabNavigation from './BottomTabNavigation'
import DpDownloadScreen from '../screens/DpDownloadScreen'
import SettingScreen from '../screens/SettingScreen'
import ProScreen from '../screens/ProScreen'
import Aboutapp from '../screens/Aboutapp'
import BookmarkDetailScreen from '../screens/BookmarkDetailScreen'




const Stack = createNativeStackNavigator()


const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false,
    }}>
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={BottomTabNavigation} />
        <Stack.Screen name="DpDownload" component={DpDownloadScreen} />
        <Stack.Screen name='Setting' component={SettingScreen} />
        <Stack.Screen name='Pro' component={ProScreen} />
        <Stack.Screen name='Aboutapp' component={Aboutapp} />
        <Stack.Screen name='BookmarkDetail' component={BookmarkDetailScreen} />
    </Stack.Navigator>
  )
}

export default StackNavigation

const styles = StyleSheet.create({})