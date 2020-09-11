import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

import { armazenaDados, enviaDados } from '../Dados/index'


export default function Cadastro () {
    
    const [allNome, setAllNome] = useState('');
    const [allSobrenome, setAllSobrenome] = useState('');
    const [allEmail, setAllEmail] = useState('');
    const [allSenha, setAllSenha] = useState('');

    // const [AllCadastro, setAllCadastro] = useState({
    //     nome: allNome,
    //     sobrenome: allSobrenome,
    //     email: allEmail,
    //     senha: allSenha
    // })
    

    const navigation = useNavigation();
    
    // function  capturaNome (iten) {
    //     setAllNome(iten);
    // }
    // function  capturaSobrenome (iten) {
    //     setAllSobrenome(iten);
    // }
    // function  capturaEmail(iten) {
    //     setAllEmail(iten);
    // }
    // function  capturaSenha(iten) {
    //     setAllSenha(iten);
    // }

// const cadastro = [];

// cadastro.push({nome: allNome, allSobrenome: allSobrenome, email: allEmail, senha: allSenha}) 

function cadastrar () {

    armazenaDados(allNome, allSobrenome, allEmail, allSenha);
    // armazenaDados(allNome);

    navigation.navigate('Confirmacao')

    const teste = enviaDados();
    // const testando = JSON.stringify(teste)
    // teste.map(({nome, sobrenome, email, senha}) =>{
    //     return{
    //         nome,
    //         sobrenome,
    //         email, 
    //         senha
    //     }
    // })
    // teste.map(({nome}) =>{
    //     return{
    //         nome
    //     }
    // })

    alert(teste);
}



    return (
      <View style={styles.container}>

        <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={true}>

                <View style={styles.miniLogoArea}>
                <Image 
                    source={require('../../../src/img/mini-logo.png')}
                    style={styles.imgMiniLogo}
                />
                </View>  


                <View style={styles.inputArea}>
                    <Text style={styles.textCadastro}>Cadastro</Text>

                    <TextInput 
                    style={styles.input}
                    placeholder="Nome"
                    value={allNome}
                    onChangeText={(text) => setAllNome(text)}
                    />
                    <TextInput 
                    style={styles.input}
                    placeholder="Sobrenome"
                    value={allSobrenome}
                    onChangeText={(text) => setAllSobrenome(text)}
                    />
                    <TextInput 
                    style={styles.input}
                    placeholder="Email"
                    value={allEmail}
                    onChangeText={(text) => setAllEmail(text)}
                    />
                    <TextInput 
                    style={styles.input}
                    placeholder="Senha"
                    value={allSenha}
                    onChangeText={(text) => setAllSenha(text)}
                    />
                </View>

                <View style={styles.btnArea}>
                    {/* <TouchableOpacity style={styles.btnEnviar} onPress={() =>  navigation.navigate('Confirmacao') }> */}

                    <TouchableOpacity style={styles.btnEnviar} onPress={cadastrar}>
                        <Text style={styles.btnTexto}> Enviar </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnVoltarLogin} onPress={() =>  navigation.navigate('Logar') }>
                        <Text style={styles.btnTexto}> Cancelar </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
      </View>
    )
}



const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#7cb124',
    },
    miniLogoArea:{
        height: 40,
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
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center'
      },
    btnEnviar: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        height: 40,
        width: 300,
        margin: 10,
        borderRadius: 30,
      },
      btnVoltarLogin: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        height: 40,
        width: 300,
        margin: 10,
        borderRadius: 30
      },
      btnTexto:{
        fontSize: 25,
        fontWeight: 'bold',
        color: '#85b62d'
      },
      inputArea:{
        flex:1,
        marginTop: 70,
        alignItems: 'center',
        justifyContent: 'center',
      },
      input:{
        marginTop:15,
        width:300,
        height: 45,
        backgroundColor: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
        borderRadius: 3,
        fontSize: 20,
        paddingLeft:15 
      },
      textCadastro:{
          color: '#FFF',
          fontSize: 30,
          fontWeight: 'bold',
          marginTop: -25,
          fontFamily: 'arial'
      }

})

