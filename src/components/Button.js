import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Color from './Color'

const Button = (props) => {
  return (
    <TouchableOpacity style={[{backgroundColor:props.color,borderWidth:props.width},styles.btn]} onPress={props.onPress}>
      <Text style={[{color:props.textcolor},styles.txt]}>{props.title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    btn: {
        width:'90%',
        height:66,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:19,
        marginBottom:19,
        borderColor:Color.snow
    },
    txt:{
        fontSize:18,
        fontWeight:'bold',
        textAlign:'center'
    }
})