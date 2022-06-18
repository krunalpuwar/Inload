import { View, Text, StyleSheet,SafeAreaView,StatusBar,Image,TouchableOpacity,ImageBackground } from 'react-native'
import React from 'react'
import Color from '../components/Color'
import { useNavigation } from '@react-navigation/native'
import Header from '../components/Header'

const SettingScreen = () => {
const navigation = useNavigation()

  const Menu = (props) => {
    return(
      <>
      <TouchableOpacity style={styles.menu} onPress={props.onPress}>
        <Text style={{color:'#4a4a4a',fontSize:18}}>{props.title}</Text>
        <Image source={require('../images/arrow-right-black.png')} />
      </TouchableOpacity>
      </>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      
      
      {/* Header */}
      <Header title='Settings' />


      {/*  */}
      <TouchableOpacity style={{alignItems:'center',marginTop:30,marginBottom:19}} onPress={() => navigation.navigate('Pro')}>
      <ImageBackground source={require('../images/Rectangle.png')} style={{height:65,width:335,flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
        <Image source={require('../images/crown.png')} />
        <Text style={{fontSize:20,color:Color.snow,fontWeight:'bold'}}>Upgrade to Pro</Text>
        <Text></Text>
      </ImageBackground>
      </TouchableOpacity>

      <Menu title='Share app' />
      <View style={{borderWidth:0.5,borderColor:'#D9D9D9'}}></View>

      <Menu title='Rate us' />
      <View style={{borderWidth:0.5,borderColor:'#D9D9D9'}}></View>

      <Menu title='Contact us' />
      <View style={{borderWidth:0.5,borderColor:'#D9D9D9'}}></View>

      <Menu title='Privacy policy' />
      <View style={{borderWidth:0.5,borderColor:'#D9D9D9'}}></View>

      <Menu title='About app' onPress={()=>navigation.navigate('Aboutapp')} />


    </SafeAreaView>
  )
}

export default SettingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      },
      imgContainer:{
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
      },
      divider:{
        marginTop:9,
        borderWidth:0.5,
        borderColor:'#D9D9D9'
    },
    menu:{
      flexDirection:'row',
      alignItems:'center',
      paddingHorizontal:35,
      paddingVertical:15,
      justifyContent:'space-between',
      margin:9
    }
})