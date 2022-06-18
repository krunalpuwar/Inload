import { StyleSheet, Text, View, SafeAreaView,Image, Platform ,StatusBar} from 'react-native'
import React from 'react'
import Color from '../components/Color'
import Button from '../components/Button'
import {useNavigation} from '@react-navigation/native'

const LoginScreen = () => {
    const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../images/login.png')} />
      <Text style={styles.heading}>Login with Instagram</Text>
      <Text style={styles.para}>Login with your instgram account to access all the features seamlessly</Text>
    <View style={styles.btnContainer}>
        <Button
            title='Login'
            color={Color.snow}
            textcolor={Color.purple}
            onPress={() => navigation.navigate('Home')}
        />
        <Button
            title='Explore'
            color={Color.transparent}
            textcolor={Color.snow}
            onPress={()=>{}}
            width={1}
        />
    </View>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Color.purple,
        alignItems:'center',
        justifyContent:'center',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    heading:{
        fontSize:24,
        color:Color.snow,
        marginTop:80,
        fontWeight:'bold'
    },
    para:{
        fontSize:16,
        color:Color.snow,
        marginTop:19,
        marginHorizontal:49,
        textAlign:'center'
    },
    btnContainer:{
        marginTop:66,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
    }

})