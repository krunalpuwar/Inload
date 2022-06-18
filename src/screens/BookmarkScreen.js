import { StyleSheet, Text, View,SafeAreaView,StatusBar,Image,TouchableOpacity,ImageBackground } from 'react-native'
import React ,{useState,useEffect} from 'react'
import Color from '../components/Color'
import Bookmark from '../data/Bookmark'
import { FlatList } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import Header from '../components/Header'

const BookmarkScreen = () => {
    const navigation = useNavigation()
    const [active,setActive] = useState(true)
    const[status,setStatus] = useState('photo')
    const[datalist,setDatalist] = useState(Bookmark)

    const setStatusFilter = (status) => {
        setStatus(status)
        setDatalist(Bookmark.filter(item => item.category === status))

    }

    const renderItem = ({item,index}) => {
         return(
            <TouchableOpacity key={index} style={{marginHorizontal:17,marginVertical:9}} onPress={() => navigation.navigate('BookmarkDetail',{
                item:item
            })}>
                <ImageBackground source={item.image} style={{
                    height:150,
                    width:150,
                }}>
                    {/* Video Only */}
                <TouchableOpacity style={[{display:status == 'video' ? 'flex' : 'none'},styles.bookmarkiconPlay]}>
                    <Image source={require('../images/arrow-right.png')} />
                </TouchableOpacity>
                 {/*Both  */}
                <TouchableOpacity style={styles.bookmarkicon}>
                    <Image source={require('../images/bookmark.png')} />
                </TouchableOpacity>
                </ImageBackground>
            </TouchableOpacity>

         )
    }

    return (
    <SafeAreaView style={styles.container}>
       {/* Header */}
       <Header title='Bookmark' />
        {/* BTN */}
        <View style={{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between',
            marginHorizontal:55,
            marginTop:25,
            marginBottom:12
        }}>
            <TouchableOpacity style={[{backgroundColor:active?Color.purple:'#C4C4C4'},styles.btn]} onPress={()=>{
                setActive(true)
                setStatusFilter('photo')
                }}>
                <Text style={{textAlign:'center',color:Color.snow}}>Photos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[{backgroundColor:active?'#C4C4C4':Color.purple},styles.btn]} onPress={()=>{
                setActive(!true)
                setStatusFilter('video')
            }}>
            <Text style={{textAlign:'center',color:Color.snow}}>Videos</Text>
            </TouchableOpacity>
        </View>

        {/* List */}
            <FlatList
                data={datalist}
                keyExtractor={(e,i) => i.toString()}
                renderItem={renderItem}   
                numColumns={2}  
                style={{marginBottom:90}}
                />


    </SafeAreaView>
  )
}

export default BookmarkScreen

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
      divider:{
        marginTop:9,
        borderWidth:0.2,
        backgroundColor:'#D9D9D9'
    },
    btn:{
        width:100,
        padding:12,
        borderRadius:19,
        margin:9
    },
    bookmarkicon:{
        position:'absolute',
        bottom:9,
        right:9,
        backgroundColor:'rgba(255,255,255,0.5)',
        height:30,
        width:30,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:7
    },
    bookmarkiconPlay:{
        position:'absolute',
        top:60,
        left:60,
        backgroundColor:'rgba(255,255,255,0.5)',
        height:30,
        width:30,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:7
    }
})