import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
} from "react-native";
import React from "react";
import Header from "../components/Header";
import Color from "../components/Color";

const Aboutapp = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/*  Header */}
      <Header title="About app" />

      {/* Image */}
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Image
          source={require("../images/pro.png")}
          style={{ height: 100, width: 100, marginTop: 30 }}
        />
        <Text
          style={{
            color: Color.purple,
            fontSize: 26,
            fontWeight: "bold",
            marginTop: 13,
          }}
        >
          Inload
        </Text>
        <Text style={{ color: "#949494", fontSize: 16, marginTop: 9 }}>
          Instagram media downloader
        </Text>
      </View>

      <View style={styles.divider}></View>
      {/*  */}
      <View style={{marginVertical:25,marginHorizontal:35}}>
        <Text style={{textAlign:'center',fontSize:16}}>
          Inload app allows you to view and download the instagram media like
          reels,videos,posts and many more with great UI and Hassle free
          experience
        </Text>
      </View>
      
          {/*  */}
        <Text style={{textAlign:'center',fontSize:16,color:'#9b93ef'}}>{`Just Past & Download`}</Text>
          
          {/* Divider */}
        <View style={styles.divider}></View>
          
          {/*  */}
          <View>
            <Text style={{textAlign:'center',fontSize:16,marginTop:25}}>App Version</Text>
            <Text style={{textAlign:'center',fontSize:16,marginTop:7}}>1.0</Text>
          </View>

          {/* Divider */}
        <View style={styles.divider}></View>

        {/*  */}
        <Text style={{textAlign:'center',fontSize:16,marginTop:7}}>Product by</Text>
        <Text style={{textAlign:'center',fontSize:16,marginTop:7}}>DeadMad Technologies</Text>

        <Text style={{marginTop:23,textAlign:'center',fontSize:12,color:'#999999'}}>All the rights to @instagram</Text>

    </SafeAreaView>
  );
};

export default Aboutapp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  divider: {
    marginTop: 9,
    borderWidth: 0.5,
    borderColor: "#D9D9D9",
    marginHorizontal: 39,
    marginTop: 25,
  },
});
