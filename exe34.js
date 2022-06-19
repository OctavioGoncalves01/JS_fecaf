//34
// Crie um projeto usando o EXPO CLI chamado matematica que mostre na tela a seguinte expressão e seu resultado:
// 4 * 8 / 2 = 16
// **Desafio coloque as informações da expressão e do resultado em variáveis
//34
// Crie um projeto usando o EXPO CLI chamado matematica que mostre na tela a seguinte expressão e seu resultado:
// 4 * 8 / 2 = 16
// **Desafio coloque as informações da expressão e do resultado em variáveis

import React from "react";
import { Text, TextInput, View } from "react-native";

let num1 = 4;
let num2 = 8;
let num3 = 2;

function matematica(){
  return(
  <View>
    <Text/>
    <Text>
      {num1*num2 / num3}
    </Text>
  </View>
  );
}
export default matematica;
