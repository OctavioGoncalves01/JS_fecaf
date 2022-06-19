import React from "react";
import {View} from "react-native";


//Bandeira da Italia
export default function app(){
  return(
      <View style={{flex: 1, 
                  flexDirection: "row", 
                  backgroundColor: "black", 
                  alignItems: "center"}}>

      <View style={{backgroundColor: "red", flex:1, width: 100, height: 250}}/>
      <View style={{backgroundColor: "white", flex: 1, width: 100, height: 250}}/>
      <View style={{backgroundColor: "green", flex: 1, width: 100, height: 250}}/>

      </View>
  );
}