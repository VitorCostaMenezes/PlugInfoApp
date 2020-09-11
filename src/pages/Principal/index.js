import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native'; 



export default function Principal() {

    const navigation = useNavigation();

    return (
      <View style={styles.container}>

        <View style={styles.miniLogoArea}>
          <Image 
            source={require('../../../src/img/mini-logo.png')}
            style={styles.imgMiniLogo}
         />
        </View>  

        <View style={styles.principalArea}>
          <Image 
            source={require('../../../src/img/principal.png')}
            style={styles.img}
         />
        </View>

           <View style={styles.btnArea}>
              <TouchableOpacity style={styles.btnAvancar} onPress={() =>  navigation.navigate('Logar') }>
                  <Text style={styles.btnTexto}> Avançar </Text>
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
    img:{
        width: 300,
        height: 300,
        borderRadius: 20,
    },
    principalArea:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center' 
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
    btnAvancar: {
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

})
