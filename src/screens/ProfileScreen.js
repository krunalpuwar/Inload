import { TouchableOpacity,StyleSheet, Text, View, SafeAreaView,StatusBar,Image,ImageBackground } from 'react-native'
import React from 'react'
import Color from '../components/Color'
import { useNavigation } from '@react-navigation/native'
import Header from '../components/Header'

const ProfileScreen = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      
      
      {/* Header */}
      <Header title='Profile' />
        
        
        {/* Image */}
        <View style={styles.imgContainer}>
            <ImageBackground source={require('../images/profile.png')}  style={styles.profileImg}>
            <View style={styles.cameraIcon}>
                <Image source={require('../images/camera.png')} />
            </View>
            </ImageBackground>
        </View>
        

        {/* Name */}
        <View style={{alignItems:'center',justifyContent:'center'}}>
        <View style={styles.nameContainer}>
            <Text style={styles.nameText}>Jane morin</Text>
        </View>
        </View>
            <Text style={styles.logout}>Logout?</Text>
    </SafeAreaView>
  )
}

export default ProfileScreen

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
        paddingVertical:27,
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
        backgroundColor:'#D9D9D9'
    },
    profileImg:{
        height:90,
        width:90,
        marginTop:29,
        overflow:'hidden',
    },
    cameraIcon:{
        height:30,
        width:30,
        backgroundColor:Color.snow,
        position:'absolute',
        bottom:-4,
        right:-5,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center'
    },
    nameContainer:{
        width:'90%',
        borderWidth:1,
        borderColor:Color.purple,
        padding:19,
        borderRadius:10,
        justifyContent:'center',
        marginTop:20,
    },
    nameText:{
        fontSize:16,
        color:Color.purple,
        fontWeight:'normal',
    },
    logout:{
        fontSize:16,
        color:Color.purple,
        marginTop:15,
        marginHorizontal:35
    }
})