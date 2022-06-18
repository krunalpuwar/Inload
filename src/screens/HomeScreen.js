import { TouchableOpacity,StyleSheet, Text, View, SafeAreaView,Platform, StatusBar,Image,TextInput } from 'react-native'
import React,{useState} from 'react'
import Color from '../components/Color'
import { useNavigation } from '@react-navigation/native'
const HomeScreen = () => {
  const [link,setLink] = useState('')
  const navigation = useNavigation()
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
      <Text style={styles.maintxt}>Download reels,videos,posts and stories</Text>
      
      
      {/* Input Container */}
      <View style={styles.inputContainer}>
        <TextInput placeholder='Past Your Link Here' style={styles.input} onChangeText={txt => setLink(txt)} />
        <TouchableOpacity style={styles.btnContainer}>
            <Image source={require('../images/arrow-right.png')} />
        </TouchableOpacity>
      </View>
      {/* Divider */}
      <View style={{borderColor:'#D9D9D9',borderWidth:0.5,marginTop:70,marginHorizontal:30}}></View>
      
      
      {/* PPD */}
      <View style={{margin:29}}>
        <Text style={{fontSize:16,color:'#4E4E4E'}}>Profile pictures (DP)</Text>
        <TouchableOpacity style={styles.DPbtn} onPress={()=>navigation.navigate('DpDownload')}>
          <Text style={{color:Color.snow,fontSize:16}}>Download DP</Text>
          <Image source={require('../images/arrow-right1.png')} />
        </TouchableOpacity>
        <Text style={{textAlign:'center',marginTop:19,fontSize:12,color:'#969696'}}>Click here to download or view profile pictures</Text>
      </View>

    </SafeAreaView>
  )
}

export default HomeScreen

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
    textAlign:'center',
    marginVertical:19, 
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
  DPbtn:{
    marginTop:30,
    backgroundColor:Color.purple,
    height:60,
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection:'row',
    paddingHorizontal:19,
    borderRadius:19
  }
})