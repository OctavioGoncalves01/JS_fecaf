//Crie uma aplicativo React Native com um formulário para cadastrar Pets conforme o layout em anexo.

import React from "react";
import { Text, TextInput, View } from "react-native";

function tela_pet(){
  return(
  <View>
    <Text/>
    <Text>
    formulário para Pets: 
    </Text>

    <TextInput style = {{color: 'black', backgroundColor: 'grey'}}
    placeholder = 'nome do pet'/>
    <TextInput style = {{color: 'black', backgroundColor: 'grey'}}
    placeholder = 'Raça'/>
    <TextInput style = {{color: 'black', backgroundColor: 'grey'}}
    placeholder = 'Peso'/>
    <TextInput style = {{color: 'black', backgroundColor: 'grey'}}
    placeholder = 'data de Nacimento'/>
  </View>
  );
}

export default tela_pet;