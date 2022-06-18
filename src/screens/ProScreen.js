import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity,Image,StatusBar, Platform, ImageBackground } from 'react-native'
import React from 'react'
import Color from '../components/Color'
import Button from '../components/Button'
import { useNavigation } from '@react-navigation/native'
import Header from '../components/Header'

const ProScreen = () => {
    const navigation = useNavigation()
    const Details = (props) => {
        return(
          <>
          <View style={styles.menu}>
            <Image source={require('../images/arrow-right-black.png')} />
            <Text style={{color:'#4a4a4a',fontSize:18,marginLeft:18}}>{props.title}</Text>
            <Text></Text>
          </View>
          </>
        )
      }
    


  return (
    <SafeAreaView style={styles.container}>
      
      
    {/* Header */}
      <Header title='Inload Pro' /> 

     {/* Image */}
        <View style={{alignItems:'center',justifyContent:'center',marginTop:30}}>
            <ImageBackground source={require('../images/pro.png')} style={{height:100,width:100}}>
                <View style={styles.popBtn}>
                    <Image source={require('../images/crown.png')} style={{height:18,width:18}} />
                </View>
            </ImageBackground>
        </View>

        {/* Price */}
        <Text style={{textAlign:'center',fontSize:22,fontWeight:'bold',color:Color.purple,marginTop:40}}>₹ 250 for life time</Text>

        {/* Description */}
        <View style={{alignItems:'center',justifyContent:'center',marginTop:40,marginBottom:20}}>

        <View style={{backgroundColor:'#f4f4ff',height:300,width:325,borderRadius:10}}>
            <Text style={{fontSize:18,marginLeft:19,marginTop:15}}>Pro features:</Text>
            <View style={styles.divider}></View>
            <Details title='Ads free experience' />
            <Details title='Access to all new features' />
            <Details title='Access to bookmark' />
            <Details title='Regularly updates' />
            <Details title='Bug free experience' />
        </View>
        <View style={{width:'100%',alignItems:'center',marginTop:20}}>

        <Button
            title='Subscribe Now'
            onPress={() => {}}
            color={Color.purple}
            textcolor={Color.snow}
            />
            </View>
        </View>

    </SafeAreaView>
  )
}

export default ProScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      },
      header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:35,
        paddingVertical:19,
      },
      headerText:{
        fontSize:20,
        fontWeight:'bold',
        color:Color.purple,
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
    popBtn:{
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        height:35,
        width:35,
        backgroundColor:Color.purple,
        bottom:-9,
        right:-9,
        borderRadius:60
},
menu:{
    flexDirection:'row',
    alignItems:'flex-start',
    marginVertical:12,
    marginHorizontal:10
  }
})