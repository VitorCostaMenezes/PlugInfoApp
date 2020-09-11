import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native'; 



export default function Logar () {

    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');


    function validaEmail() {

      // if(email == '' || senha == ''){
      //   return alert('Digite sua senha e email');
      // }else{
      //   navigation.navigate('Home', {email: email, senha: senha});
      // }

    if (email == "" || senha == '') {
        alert('Por favor, informe o seu EMAIL e SENHA');
        setEmail('');
        setSenha('')
        return false;
    }
    if (senha.length <= 5) {
      alert('Senha inválida! A sua senha deve conter no minimo 6 caracteres');
      setEmail('');
      setSenha('')
      return false;
  }

        //realiza um verificação básica de email
    if(email == "" || email.indexOf('@') == -1 || email[0] == '@' || email.indexOf(' ') !== -1 
                   || email.indexOf('.') == -1 || email[0] == '.'  ) {
       alert( "E-MAIL inválido!" );
       setEmail('');
       setSenha('')
       return false;
       
  	} else {
        navigation.navigate('Home', {email: email, senha: senha});
    }

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

         <View style={styles.principalArea}>
          <Image 
            source={require('../../../src/img/logar.png')}
            style={styles.img}
         />
        </View> 

        <View style={styles.inputArea}>

           <Text style={styles.textLogin}>Login</Text>

            <TextInput 
            style={styles.input}
            placeholder="Digite seu email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            />

            <TextInput 
            style={styles.input}
            placeholder="Digite sua senha"
            secureTextEntry={true}
            value={senha}
            onChangeText={(text) => setSenha(text)}
            />

        </View>

        <View style={styles.btnArea}>
          {/* <TouchableOpacity style={styles.btnHome} onPress={() =>  } onPress={validaEmail}> */}
          <TouchableOpacity style={styles.btnHome}  onPress={validaEmail}>
              <Text style={styles.btnTexto}> Entrar </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnCadastro} onPress={() =>  navigation.navigate('Cadastro') }>
              <Text style={styles.btnTexto}> Cadastre-se </Text>
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
    img:{
      width: 150,
      height: 150,
      borderRadius: 75,
  },
  principalArea:{
      flex: 0.5,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: -20 
  },
    miniLogoArea:{
        height: 40,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginBottom: 40
    },
    imgMiniLogo:{
        width:85,
        height:50,
        margin:15
    },
    btnArea:{
        flex: 1,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center'
      },
    btnHome: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        height: 40,
        width: 300,
        margin: 10,
        borderRadius: 30
      },
      btnCadastro: {
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
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
      },
      input:{
        marginTop:15,
        width:300,
        height: 45,
        backgroundColor: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
        borderRadius: 3,
        fontSize: 20,
        padding: 10
      },
      textLogin:{
        color: '#FFF',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 10,
        fontFamily: 'arial'
    }

})

