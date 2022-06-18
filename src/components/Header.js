import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import Color from './Color'
import { useNavigation } from '@react-navigation/native'

const Header = (props) => {
  const navigation = useNavigation()
  return (
   <>
    {/* Header */}
     <View style={styles.header}>
     <TouchableOpacity onPress={()=>navigation.goBack()}>
     <Image source={require('../images/arrow-square-left.png')} style={styles.headerImg} />
     </TouchableOpacity>
   <Text style={styles.headerText}>{props.title}</Text>
   <Text></Text>
   </View>
   
   
   {/* Divider */}
   <View style={styles.divider}></View>
   </>
  )
}

export default Header

const styles = StyleSheet.create({
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
      divider:{
        marginTop:9,
        borderWidth:0.5,
        borderColor:'#D9D9D9'
    },
    headerImg:{
        height:24,
        width:24
    }
})