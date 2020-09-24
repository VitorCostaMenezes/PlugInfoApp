import React, { useState } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, TouchableNativeFeedback} from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native'; 
import { enviaDados } from '../Dados/index'




export default function Home ({route}) {

  const [info, setInfo] = useState('')

    const navigation = useNavigation('');


    const dados = enviaDados()



    // const dados = JSON.parse(enviaDados());

    // const teste = dados.map(({nome}) => {
    //   return{
    //     nome
    //   }
    // })

    // const testando = JSON.stringify(teste[0].nome)


//ESTADO GLOBAL

//CONTEXT API
//FFERRAMENTA DE GERENCIAMENTO DE ESTADO GLOBAL   (REDUX, MOBIEX)


  
    





    return (
      <View style={styles.container}>

        <View style={styles.miniLogoArea}>
            <Image 
                source={require('../../../src/img/mini-logo.png')}
                style={styles.imgMiniLogo}
            />
        </View>  

        {/* <Text style={styles.textoInfo}>Nome: {route.params?.nome} </Text> */}
        <Text style={styles.textoInfo}>Nome: {info} </Text>
        <Text style={styles.textoInfo}>Email: {route.params?.email} </Text>



        <View style={styles.btnAreaInfo}>

            {/* <TouchableOpacity style={styles.btnInfo} onPress={() => setInfo(testando)} > */}
            <TouchableOpacity style={styles.btnInfo} onPress={() => alert(dados)} >
                <Text style={styles.btnTextoInfo}> teste de dados </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnInfo} onPress={ () =>  navigation.navigate('Atividades')} >
                <Text style={styles.btnTextoInfo}> Atividades </Text>
            </TouchableOpacity>

            {/* <TouchableOpacity style={styles.btnInfo} onPress={ () => alert("Esta funcionalidade não esta ativa no momento!")} > */}
            <TouchableOpacity style={styles.btnInfo} onPress={() =>  navigation.navigate('Capacitacao')} >
                <Text style={styles.btnTextoInfo}> Capacitações </Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.btnInfo} onPress={ () =>  navigation.navigate('Projetos')} >
                <Text style={styles.btnTextoInfo}> Projetos </Text>
            </TouchableOpacity>

           </View>


           <View style={styles.btnArea}>
                <TouchableOpacity style={styles.btnSair} onPress={ () => navigation.dispatch(StackActions.popToTop)} >
                    <Text style={styles.btnTexto}> Sair </Text>
                </TouchableOpacity>
           </View>

      </View>
    )
}


const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#7cb124', 
    },
    miniLogoArea:{
        flex:1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    imgMiniLogo:{
        width:85,
        height:50,
        margin:15
    },
    btnArea:{
        flex: 1,
        flexDirection: 'row',
        marginTop: 70,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center'
      },
    btnAreaInfo:{
        flex: 1,
        marginTop: 70,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center'
      },
    btnSair: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        height: 40,
        margin: 10,
        borderRadius: 30
      },
      btnInfo: {
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        height: 40,
        margin: 10,
        borderRadius: 30
      },
      btnTexto:{
        fontSize: 25,
        fontWeight: 'bold',
        color: '#7cb124', 
      },
      btnTextoInfo:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#7cb124',
      },
      textoInfo:{
          color: '#fefcfd',
          marginLeft: 20,
          marginBottom: 15,
          fontSize: 20
      }

})

