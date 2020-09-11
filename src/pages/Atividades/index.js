import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native'; 


export default function Atividades () {

    const navigation = useNavigation();


    return (
      <View style={styles.container}>

        <View style={styles.miniLogoArea}>
            <Image 
                source={require('../../../src/img/mini-logo.png')}
                style={styles.imgMiniLogo}
            />
        </View>  

        {/* <Text style={styles.textoInfo}>Nome: {route.params?.nome} </Text> */}
        <Text style={styles.textoInfo}>Atividades </Text>
       


        <View style={styles.btnAreaInfo}>



           </View>


           <View style={styles.btnArea}>
                <TouchableOpacity style={styles.btnSair} onPress={ () => navigation.goBack()} >
                    <Text style={styles.btnTexto}> Voltar </Text>
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

