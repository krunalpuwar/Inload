import { StyleSheet, Text, View ,SafeAreaView,Image,TouchableOpacity, Platform,StatusBar} from 'react-native'
import React from 'react'
import Color from '../components/Color'
import Button from '../components/Button'
import { useNavigation } from '@react-navigation/native';



const Onboarding = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../images/Onbaording.png')} />
      <View style={styles.txtContainer}>
            <Text style={styles.heading}>Media Downloader</Text>
            <Text style={styles.para}>Download and share all the instagram media like reels, posts, stories and many more in one tap with all the features in one app</Text>
            <TouchableOpacity style={styles.btnContainer}>
                 <Button title='Get Started' color={Color.snow} textcolor={Color.purple} onPress={()=>navigation.replace('Login')} />
            </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Onboarding

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Color.purple,
        alignItems:'center',
        justifyContent:'center',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    txtContainer:{
        width:'100%',
        alignItems:'center'
    },
    heading:{
        textAlign:'center',
        fontSize:24,
        color:Color.snow,
        fontWeight:'bold'
    },
    para:{
        textAlign:'center',
        fontSize:16,
        color:Color.snow,
        marginTop:20,
        marginHorizontal:38
    },
    btnContainer:{
        marginTop:66,
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    }
})