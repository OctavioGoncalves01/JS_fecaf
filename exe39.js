import React from "react";
import {View, Button} from "react-native";

function app(){
  return(
    <View style={{flex: 1, flexDirection: 'column', alignSelf: 'center', marginVertical: 50}}>
      <Button title='A' />
      <Button title='B' />
      <Button title='C' />
    </View>
  );
}

export default app;