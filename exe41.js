// tela 1
// import React from "react";
// import {View, Text, StyleSheet, ImageBackground, TextInput, Button} from "react-native";
// import fundo from "./assets/pets.png";

// const InputDados = (props) => {
//   return(
//     <View style={{flex: 1}}>
//       <TextInput style ={estilos.txt_input } placeholder={props.Dados}/>
//     </View>
//   );
// }

// const estilos = StyleSheet.create({
//   txt_cab : {
//             fontSize: 26,
//             color: 'rgba(255, 255, 255, 1)',
//             backgroundColor: 'rgba(80, 80, 80, 0.5)', 
//             borderRadius: 25, 
//             textAlign: 'center',
//             marginTop: 20,
//             marginHorizontal: 45,
//   },

//   txt_input : {
//             flex: 1,
//             fontSize: 16,
//             color: 'white',
//             backgroundColor: 'rgba(24, 136, 153, 0.4)', 
//             borderRadius: 3, 
//             textAlign: 'center',
//             marginHorizontal: 45,
//             marginVertical: 20,
//   },

// })

// function app(){
//   return(
//     <View style={{flex: 1,  backgroundColor:'rgba(2, 200, 230, 0.2)'}}>

//       <View style={{flex: 3, borderBottomWidth: 3, borderColor: 'rgba(80, 80, 80, 0.7)'}}>
//         <ImageBackground source={fundo} style={{
//                                         width: 330, 
//                                         flex: 1, 
//                                         alignContent: 'space-between',
//                                         marginTop: 25
//                                         }}>
//           <Text style={estilos.txt_cab}>
//               PETS: 
//           </Text>
//         </ImageBackground>  
//       </View>

//       <View style={{flex: 6}}>
//         <InputDados Dados = 'Nome do PET'/>
//         <InputDados Dados = 'Raça'/>
//         <InputDados Dados = 'Peso'/>
//         <InputDados Dados = 'Nascimento'/>

//       </View>

//       <View style={{flex: 1, 
//                   margin: 15,
//                   marginTop: 45, 
//                   justifyContent: 'center',
//                   }}>

//         <Button title= 'Cadastrar PET' color={'rgba(25, 230, 27, 1)'}/>

//         <View style={{flexDirection: 'row', 
//                       justifyContent: 'center', 
//                       marginTop: 15}}>

//           <View style={{flexDirection: 'row', 
//                       justifyContent: 'center', 
//                       margin: 15}}>
//             <Button title= 'Cadastro' color={'rgba(230, 44, 13, 5)'}/>
//           </View>
//           <View style={{flexDirection: 'row', 
//                       justifyContent: 'center', 
//                       margin: 15}}>
//             <Button title= 'lista PETs' color={'rgba(230, 44, 13, 5)'}/>
//           </View>
          
//         </View>
//       </View>

//     </View>
//   );
// }

// export default app;



// tela 2

// import React from "react";
// import {View, Text, StyleSheet, ImageBackground, TextInput, Button, Alert} from "react-native";
// import fundo from "./assets/pets.png";

// const Dados = (props) => {
//   return(
//     <View style={{height: 50, flexDirection: 'column', flex: 1, justifyContent: 'center'}}>
//       <Text style ={estilos.txt_dado }>{props.Nome} {props.Raca} {'\n'} {props.Peso} {props.Nasc}</Text>
//     </View>
//   );
// }

// const estilos = StyleSheet.create({
//   txt_cab : {
//             fontSize: 26,
//             color: 'rgba(255, 255, 255, 1)',
//             backgroundColor: 'rgba(80, 80, 80, 0.5)', 
//             borderRadius: 25, 
//             textAlign: 'center',
//             marginTop: 20,
//             marginHorizontal: 45,
//   },

//   txt_input : {
//             flex: 1,
//             fontSize: 16,
//             color: 'white',
//             backgroundColor: 'rgba(24, 136, 153, 0.4)', 
//             borderRadius: 3, 
//             textAlign: 'center',
//             marginHorizontal: 45,
//             marginVertical: 20,
//   },

//   txt_dado : {
            
//             fontSize: 16,
//             color: 'white',
//             backgroundColor: 'purple', 
//             borderRadius: 120, 
//             textAlign: 'center',
//             marginHorizontal: 60,
//             marginVertical: 45,
//   },

// })

// function app(){
//   return(
//     <View style={{flex: 1,backgroundColor: 'rgba(80, 80, 80, 0.8)' }}>
//       <View style={{flex: 3, borderBottomWidth: 3,  borderColor: 'rgba(80, 80, 80, 1)'}}>
//         <ImageBackground source={fundo} style={{
//                                         width: 330, 
//                                         flex: 1, 
//                                         alignContent: 'space-between',
//                                         marginTop: 25
//                                         }}>
//           <Text style={estilos.txt_cab}>
//               PETS: 
//           </Text>
//         </ImageBackground>  
//       </View>

//       <View style={{flex: 3}}>
//       <Dados Nome = 'junin' Peso = '4,5 kg' Raca='SRD' Nasc='11/10'/>
//       <Dados Nome = 'junin' Peso = '4,5 kg' Raca='SRD' Nasc='11/10'/>
//       <Dados Nome = 'junin' Peso = '4,5 kg' Raca='SRD' Nasc='11/10'/>
//       <Dados Nome = 'junin' Peso = '4,5 kg' Raca='SRD' Nasc='11/10'/>

//       </View>

//       <View style={{flexDirection: 'row', flex: 0.6, justifyContent: 'center', height: 100}}>
//         <View style={{flexDirection: 'row', 
//                       justifyContent: 'center', 
//                       margin: 15}}>
//             <Button title= 'Cadastro' color={'rgba(230, 44, 123, 7)'}/>
//           </View>
//           <View style={{flexDirection: 'row', 
//                       justifyContent: 'center', 
//                       margin: 15}}>
//             <Button title= 'lista PETs' color={'rgba(230, 44, 123, 7)'}/>
//           </View>
      
//       </View>

//     </View>
//   );
// }

// export default app;

llll