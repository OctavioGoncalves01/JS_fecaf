import React from "react";
import {
  View, Text, TextInput, Button, ImageBackground, Image, StyleSheet, Alert, ScrollView
  } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import imgfundo_cab from "./assets/fundo_cab.jpg";
import imgcheck from "./assets/Check.png";
import imgNcheck from "./assets/Circle.png";


//Lista com as cores usada no CRUD
const cores={
  fundo : 'rgba(128, 128, 128, 0.75)',
  letra_titulo :'rgba(140,25,10,1)',
  alltxt: 'rgba(170,5,10,1)',
  borda_titulo: 'rgba(15,15,15,0.7)',
  borda_input: 'darkred',
  fundo_input: 'rgba(0, 0, 0, 0.4)', 
  placeholder_cor: 'rgba(150, 10, 10, 1)',
  txt_input: 'rgba(150, 10, 10, 1)',
  botao: 'rgba(140,25,10,1)',
  ingredientes: 'rgba(94,10,5,1)',
  valor_pizza: 'darkred',
  valor_compra: 'rgba(94,1,5,1)'

}


//Lista com os estilos de cada funcao
const estilos = StyleSheet.create({
  txt_cab: {fontSize: 30,
            color: cores.letra_titulo, 
            backgroundColor: cores.fundo, 
            textAlign: 'center',
            borderBottomWidth: 5,
            borderBottomColor: cores.borda_titulo,
            borderRadius: 25,
            margin: 20,
            textShadowOffset: {width: 7, height: -3},
            textShadowColor: 'rgba(255, 255, 255, 0.25)',

            },

  view_input: {marginHorizontal: 25,
                    justifyContent: "center", 
                    marginTop: 10, 
                    borderColor: cores.borda_input, 
                    borderRadius: 20, 
                    borderWidth: 2,
                    backgroundColor: cores.fundo_input },

  view_lista: {marginHorizontal: 50, 
                    alignItems: 'center',
                    marginTop: 10, 
                    borderColor: cores.borda_input, 
                    borderRadius: 20, 
                    borderWidth: 2,
                    backgroundColor:cores.fundo_input ,
                    flexDirection: 'row',
                    paddingLeft: 10
                    },
            
  view_cardapio: {marginHorizontal: 20,
                    justifyContent: "center", 
                    marginTop: 10, 
                    borderColor: cores.borda_input, 
                    borderRadius: 20, 
                    borderWidth: 1,
                    backgroundColor: cores.fundo_input, 
                    fontFamily: ''                  

                    },
  botao: { marginHorizontal: 50, marginTop: 25}
  }
)


//Esta funcao retorna dados nela inserido
const CriarPedido = (props) => 
{
  return(
    <View style={estilos.view_input}>
      <TextInput placeholder ={props.txt} placeholderTextColor={cores.placeholder_cor} style={{padding: 12, fontSize: 18, color:cores.txt_input }}/>
    </View>
  );
}

//Tela pedidos, ela chama a funcao CRIARPEDIDOS, que cria a tela em si, com todos os inputs e botao 
const Pedidos = () => 
{
  return(
    <ScrollView style={{flex: 1, marginTop: 20}}>
      <CriarPedido txt = "Sabor"/>
      <CriarPedido txt = "Quantidade"/>
      <CriarPedido txt = "Recheio Borda"/>
      <CriarPedido txt = "Bebida"/>
      <Text style={{padding: 12, fontSize: 18, color: cores.valor_compra}}>Preço: </Text>
      <View style={estilos.botao}>
        <Button title = "Finalizar"
                color= {cores.botao}        
                onPress = {() => Alert.alert('Pedido Relizado :-)')}/>
      </View>  
    </ScrollView>
  );
}


//Cria cada card que aparece na tala de Lista Pedidos
const ItemLista = (props) => 
{
  let estiloItemLista ={
    justifyContent: "center", 
    padding: 7, 
    fontSize: 16,
     color: cores.alltxt
}; 

  let img = imgcheck;
  if (props.feito == false){
    img = imgNcheck;
  }
  return(
    <View style={estilos.view_lista}>
      <Image source= {img} style={{width: 20, height: 20}}/>
      <View style={{flex: 1, textAlign: 'center'}}> 
        <Text style={estiloItemLista}>Sabor: {props.sabor}</Text>
        <Text style={estiloItemLista}>Quantidade: {props.qtn}</Text>
        <Text style={estiloItemLista}>Borda: {props.borda}</Text>
        <Text style={estiloItemLista}>Bebida: {props.bebida}</Text>
      </View>
    </View>
  );
}

//Tela Lista de Pedidos, que chama a funcao PEDIDOS
const Lista = () => 
{
  return(
    <ScrollView style={{flex: 1, marginTop: 20, }}>
      <ItemLista sabor = '4 queijos' qtn = '1' borda = 'Cheddar' bebida = 'Pepsi 2l' feito = {true}/>
      <ItemLista sabor = 'Frango com Catupiry' qtn = '2' borda = '' bebida = 'Coca Cola 2l' feito = {true}/>
      <ItemLista sabor = 'Brigadeiro' qtn = '1' borda = '' bebida = 'Fanta Uva 2l' feito = {false}/>
    </ScrollView>
  );
}


//Funcao que cria um novo sabor em Cardapios, ela é outra funcao que retorna um card com Nome da pizza, ingredientes e valor
const Sabores = (S) =>
{
  return(
    <View style={estilos.view_cardapio}>
      <Text style={{fontSize: 24,
                    color: cores.alltxt,
                    textShadowOffset: {width: -3, height: -3}, 
                    textShadowColor: 'rgba(0, 0, 0, 0.2)',
                    paddingHorizontal: 12, 
                    marginVertical: 10}}> 
          {S.sabor}
      </Text>
      <Text style={{fontSize: 12, 
                    paddingHorizontal: 12, 
                    color:cores.ingredientes}}> 
          {S.ingredientes}
      </Text>
      <Text style={{marginRight: 30, 
                    textAlign: 'right', 
                    fontSize: 16, 
                    color:cores.valor_pizza}}> 
          R$:{S.valor}
      </Text>
    </View>
  )
}

//Cria a tela de cardapio, da pra add mais sabaores chamando a funcao SABORES
const Cardapio = () =>
{
  return(
    <ScrollView>

      <Sabores sabor='4 queijos' 
        ingredientes = 'muçarela, provolone, parmesão e gorgonzola' valor='100,90'/>
      <Sabores sabor='Frango com Catupiry' 
        ingredientes = 'peito de frango, queijo catupiry' valor='89,90'/>
      <Sabores sabor='Marguerita' 
        ingredientes = 'queijo, tomate, manjericão' valor='89,50'/>
      <Sabores sabor='Calabresa' 
        ingredientes = 'calabresa, tomate, cebola, azeitonas' valor='84,50'/>
      <Sabores sabor='Brigadeiro' 
        ingredientes = 'brigadeiro, granulado' valor='39,90'/>

    </ScrollView>
  );
}


const NovosSabores = () =>
{
  return(
    <View>
      <CriarPedido txt = 'Nome da Pizza'/>
      <CriarPedido txt = 'Ingredientes'/>
      <CriarPedido txt = 'Preço'/>
      <View style={estilos.botao}>
        <Button title = 'Salvar Alteração'
          color= {cores.botao}
          onPress = {() => Alert.alert('Sabor Salvo')}/>
      </View>
    </View>
  )
}


//Faz com que a tela fique em modo scroll
const Tab = createBottomTabNavigator();


//Cria a tela 
function app()
{
  return(
    <NavigationContainer>

      <View style={{flex: 1, marginTop: 22}}>
        <ImageBackground source={imgfundo_cab} style={{flex: 1}}>
          <Text style={estilos.txt_cab}>
            Pizzaria Chez Remy
          </Text>
        </ImageBackground>
      </View>

      <View style={{flex: 4}}>
        <Tab.Navigator>
          <Tab.Screen name ='Cardapio'  component = {Cardapio}/>
          <Tab.Screen name ='Criar Pedidos'  component = {Pedidos}/>
          <Tab.Screen name ='Lista de Pedidos'  component = {Lista}/>
          <Tab.Screen name ='Add Sabor'  component = {NovosSabores}/>
        </Tab.Navigator>

      </View> 
    </NavigationContainer>
  );
}

export default app;