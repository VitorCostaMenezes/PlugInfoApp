import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native'; 



export default function Confirmacao () {

    const navigation = useNavigation();


    return (
      <View style={styles.container}>

        <View style={styles.miniLogoArea}>
          <Image 
            source={require('../../../src/img/mini-logo.png')}
            style={styles.imgMiniLogo}
         />
        </View>  

        <View style={styles.textConfirmacaoArea}>
          <Text style={styles.textConfirmacao}>Cadastro Realizado com sucesso!</Text>
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
        margin:20
    },
    btnArea:{
        flex: 1,
        flexDirection: 'row',
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
      btnTexto:{
        fontSize: 25,
        fontWeight: 'bold',
        color: '#85b62d',  
      },
      textConfirmacaoArea:{
        alignItems: 'center',
        justifyContent: 'center',
      },
      textConfirmacao:{
        color: '#FFF',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 25,
        textAlign: 'center'
    }

})

