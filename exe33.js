// Crie um projeto usando o EXPO CLI chamado resumo, 
// o qual deve mostrar no dispositvo um resumo de 5 linhas do 
// conteúdo que foi mostrado na aula do dia 26/04 em um TextInput

import React from "react";
import { Text, TextInput, View } from "react-native";

// function resumo(){
//   return (
//   <View style ={{backgroundColor: 'gray', flex: 2}}>
//     <Text numberOfLines={2} style = {{color: 'darkblue'}}>
//       Deve digitar um resumo do que foi mostrado na aula do dia 26/04/22:
//     </Text>
    
//     <TextInput style={{height: 50,width: 450, borderWidth:1.5, borderColor: 'white'}} 
//       keyboardType = 'default'
//       placeholder = 'Digite seu resumo aqui...'
//       numberOfLines = {5}
//       multiline = {true}
//       onChangeText = {Text =>console.log(Text)}
//       />

//   </View>
//   );
// };

function resumo(){
  return(
    <View style ={{backgroundColor : 'lightorange'}}>
      <Text></Text>
      <Text>
        Deve digitar um resumo do que foi mostrado na aula do dia 26/04/22:
      </Text>
      <TextInput style={{height: 50,width: 450}} 
       keyboardType = 'default'
       placeholder = 'Digite seu resumo aqui...'/>
       <TextInput/>
       <TextInput/>
       <TextInput/>
       <TextInput/>
    </View>
  );
}

export default resumo;

