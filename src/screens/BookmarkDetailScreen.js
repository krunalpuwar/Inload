import { StyleSheet, Text, View,SafeAreaView,StatusBar,Platform, ImageBackground,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Color from '../components/Color'

const BookmarkDetailScreen = ({route}) => {
  const {item} = route.params

    return (
    <SafeAreaView style={styles.container}>
      <Header title={item.category} />
      {/* Image */}
      <View style={{alignItems:'center',justifyContent:'center',marginTop:30}}>
        <View>
            <Image source={item.image} style={{width:311,height:499,borderRadius:20,resizeMode:'cover'}} />
             {/* Video Only */}
             <TouchableOpacity style={[{display:item.category == 'video' ? 'flex' : 'none'},styles.bookmarkiconPlay]}>
                    <Image source={require('../images/arrow-right.png')} />
                </TouchableOpacity>
        <TouchableOpacity style={styles.bookmarkicon}>
            <Image source={require('../images/bookmark.png')} />
        </TouchableOpacity>
        </View>

        <View style={{width:'100%',flexDirection:'row',justifyContent:'space-around',marginTop:40}}>
            <TouchableOpacity style={{backgroundColor:Color.purple,height:50,width:50,alignItems:'center',justifyContent:'center',borderRadius:10}}>
                <Image source={require('../images/send-2.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:Color.purple,height:50,width:50,alignItems:'center',justifyContent:'center',borderRadius:10}}>
                <Image source={require('../images/frame.png')} />
            </TouchableOpacity>
        </View>
        
      </View>
    </SafeAreaView>
  )
}

export default BookmarkDetailScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      },
      bookmarkicon:{
        position:'absolute',
        top:9,
        right:9,
        backgroundColor:'rgba(255,255,255,0.5)',
        height:42,
        width:42,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:7
    },
    bookmarkiconPlay:{
        position:'absolute',
        top:220,
        left:140,
        backgroundColor:'rgba(255,255,255,0.5)',
        height:42,
        width:42,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:7
    }
})