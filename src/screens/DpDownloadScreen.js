import { StyleSheet, Text, View,SafeAreaView,StatusBar,TouchableOpacity,Image,TextInput } from 'react-native'
import React,{useState} from 'react'
import Color from '../components/Color'
import { useNavigation } from '@react-navigation/native'

const DpDownloadScreen = () => {
   const [link,setLink] = useState('')
  // Navigation
  const navigation = useNavigation()

  // Btn
  const click = () => {
    //Add your code here
  }
  
  
  return (
    <SafeAreaView style={styles.container}>
       {/* Header */}
       <View style={styles.header}>
        <Text style={styles.headerTxt}>Inload</Text>
        <TouchableOpacity onPress={()=> navigation.navigate('Setting')}>
        <Image source={require('../images/setting.png')} />
        </TouchableOpacity>
      </View>


      {/* Body */}
      <View style={{borderWidth:0.5,borderColor:'#D9D9D9'}}></View>

      <Text style={styles.maintxt}>Profile pictures (DP)</Text>
      
      
      {/* Input Container */}
      <View style={styles.inputContainer}>
        <TextInput placeholder='Past Your Link Here' style={styles.input} onChangeText={txt => setLink(txt)} />
        <TouchableOpacity style={styles.btnContainer} onPress={click}>
            <Image source={require('../images/arrow-right.png')} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default DpDownloadScreen

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
        paddingHorizontal:20,
        paddingVertical:19,
      },
      headerTxt:{
        fontSize:26,
        fontWeight:'bold',
        color:Color.purple,
      },
      maintxt:{
        fontSize:16,
        color:Color.purple,
        textAlign:'left',
        marginVertical:19,
        marginHorizontal:30, 
      },
      input:{
        width:'90%',
        height:60,
        borderWidth:1,
        borderColor:Color.purple,
        borderRadius:19,
        padding:12,
      },
      inputContainer:{
        width:'100%',
        alignItems:'center',
        justifyContent:'center'
      },
      btnContainer:{
        marginTop:30,
        backgroundColor:Color.purple,
        borderRadius:19,
        height:60,
        width:60,
        alignItems:'center',
        justifyContent:'center'
      },
})