import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import BookmarkScreen from '../screens/BookmarkScreen'
import ProfileScreen from '../screens/ProfileScreen'




const Tab = createBottomTabNavigator()

const BottomTabNavigation = () => {
  return (
      <Tab.Navigator screenOptions={{
            headerShown: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom:25,
                    left:20,
                    right:20,
                    elevation:6,
                    height:70,
                    borderRadius:19
            }         
      }}>
        <Tab.Screen name="Home" component={HomeScreen} options={{
         tabBarShowLabel: !true,
         tabBarIcon: ({focused}) => (
           <Image source={require('../images/home.png')} />
         ),
      }}  />
        <Tab.Screen name="Bookmark" component={BookmarkScreen} options={{
         tabBarShowLabel: !true,
         tabBarIcon: ({focused}) => (
           <View style={{backgroundColor:'#9B93EF',padding:19,borderRadius:60,top:-30}}>
             <Image source={require('../images/bookmark.png')}/>
           </View>
        ),
      }} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{
         tabBarShowLabel: !true,
         tabBarIcon: ({focused}) => (
          <Image source={require('../images/user-square.png')} />
        ),
      }} />        
      </Tab.Navigator>  
  )
}

export default BottomTabNavigation

const styles = StyleSheet.create({})