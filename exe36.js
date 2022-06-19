import React from "react";
import {Text, TextInput, View, StyleSheet, Button, Alert} from "react-native";

const estilos = StyleSheet.create({
    input : {
      fontSize: 16, 
      color: "purple",
      borderColor: "grey",
      borderWidth: 3, 
      marginLeft: 65,
      marginRight: 50,
      marginTop: 5,
      paddingLeft: 12,
      borderRadius: 10,    
      },
            
    texto_cabecalho : {
      fontSize: 20,
      backgroundColor: 'purple',
      color: 'white',
      marginTop: 25
      },

    texto_input : {
      fontSize: 14,
      backgroundColor: 'purple',
      color: 'white',
      borderRadius:15,
      marginRight: 245,
      paddingLeft: 9,
      marginTop: 25
      },

    view_style :{
      justifyContent: 'row',
      backgroundColor: 'lightgrey'
    }
            });


function tela(){
  return(
    [
    <View style ={estilos.view_style}>
      <Text style = {estilos.texto_cabecalho}>
            Formulario para cadastro de Pizzas: 
      </Text>
    </View>,

    <View  style ={estilos.view_style}>
      <Text style = {estilos.texto_input}>
        Nome:
      </Text>    
      <TextInput style={estilos.input} />
    </View>,
  
    <View style ={estilos.view_style}>
      <Text  style = {estilos.texto_input}>
        Sabor:
      </Text>    
      <TextInput style={estilos.input} />
    </View>,

    <View style ={estilos.view_style}>
      <Text  style = {estilos.texto_input}>
        Tamanho:
      </Text>    
      <TextInput style={estilos.input} />
    </View>,

    <View style ={estilos.view_style}>
      <Text  style = {estilos.texto_input}>
        Quantidade:
      </Text>    
      <TextInput style={estilos.input} />
    </View>,

    <View style ={estilos.view_style}>
      <Button 
        title = "Gravar"
        onPress = {() => Alert.alert('Pedido Relizado :-)')}
        marginTop= {12}
        marginRight={20}
        marginLeft={50}
        color = 'purple'
      />
    </View>

    ]
  );
}

export default tela;