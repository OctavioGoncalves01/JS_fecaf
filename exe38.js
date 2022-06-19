import React from "react";
import {View, Button} from "react-native";

function app(){
  return(
    <View style={{flex: 1, flexDirection: 'row', backgroundColor: 'red',  justifyContent: 'flex-start'}}>
      
      <View>
        <Button title= 'A'/>
      </View>
      <View>
        <Button title= 'B'/>
      </View>
      <View>
        <Button title= 'C'/>
      </View>
    
    </View>
  );
}

export default app;