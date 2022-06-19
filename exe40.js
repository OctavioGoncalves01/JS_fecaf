import React from "react";
import {View, Text, Image, ImageBackground, StyleSheet} from "react-native";
import fundo from './assets/tasklist.png';
import olho from './assets/Eye.png';
import check from './assets/Check.png';
import ncheck from './assets/Circle.png';

const estilos = StyleSheet.create({
  txt_cab_1 : {
    fontSize: 26,
    color: 'rgba(45, 51, 48, 1)',
    textAlign: 'center',   
    backgroundColor: 'rgba(80, 80, 80, 0.2)',
     marginHorizontal: 30
  },
  txt_cab_2 : {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',   
    backgroundColor: 'rgba(80, 80, 80, 0.3)',
    marginHorizontal: 40
    },
  item_view: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 15,
    marginHorizontal: 30,
    borderBottomWidth: 2,
    borderBottomColor: "gray",
    paddingVertical: 15
    },

  }
)

const Item = (props) => {
  let linhariscada = {TextDecorationLine: "line-through"};
  let img = check;
  if  (props.concluido==false) { 
    linhariscada = {};
    img = ncheck;
  }
   const estilos = StyleSheet.create({ txt_item : {
    fontSize: 14,
    color: 'black',
    textAlign: 'flex-start',
    }
   })

  return (
    <View style={estilos.item_view}>
      <View style={{flex: 1}}>
        <Image source = {img} style={{width: 20, height:20}}/>
      </View>
      <View style={{flex: 1}}>
        <Text style={{linhariscada} {estilos.txt_item}> {props.titulo}}</Text>
        <Text>{props.data}</Text>
      </View>
    </View>
  );
}

function app(){
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <ImageBackground source={fundo} 
          style={{flex: 1, 
          justifyContent: 'space-around'}}>
        <Image source = {olho} 
          style={{
            alignSelf: 'flex-end', 
            width: 18, 
            height: 13}}/>

        <Text style={estilos.txt_cab_1}> 
            HOJE
        </Text>
        <Text style={estilos.txt_cab_2}> 
            QUAR, 18 de Maio
        </Text>
        </ImageBackground>
      </View>

       <View style={{flex: 2, backgroundColor: 'rgba(75, 75, 75, 0.15)'}}>
          <Item titulo={'estudar'} data={'18/05'} concluido={true}/>
          <Item titulo={'Prova Multi'} data={'20/05'} concluido={false}/>
          <Item titulo={'estudar p/ prova semestral'} data={'21/05'} concluido={false}/>
          <Item titulo={'prova semestral'} data={'10/06'} concluido={false}/>
       </View>
    </View>
  );
}

export default app;