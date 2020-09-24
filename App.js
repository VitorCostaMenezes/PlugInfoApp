import React from 'react';
import { NavigationContainer } from '@react-navigation/native';   // o container é o elemento que vai envolver todas as navegações
import { createStackNavigator  } from '@react-navigation/stack';


import Principal from './src/pages/Principal/index';
import Logar from './src/pages/Logar/index';
import Home from './src/pages/Home/index';
import Cadastro from './src/pages/Cadastro/index';
import Confirmacao from './src/pages/Confirmacao/index';
import Capacitacao from './src/pages/Capacitacao/index';
import Atividades from './src/pages/Atividades/index';
import Projetos from './src/pages/Projetos/index';

const Stack = createStackNavigator();

      

export default function App () {
  
  return(
    <NavigationContainer>

    <Stack.Navigator initialRouteName="Principal" >
      
        <Stack.Screen  name='Principal'  component={Principal} options={{ headerShown: false  }} />

        <Stack.Screen name='Home' component={Home} options={{ headerShown: false}} />

        <Stack.Screen name='Cadastro' component={Cadastro} options={{ headerShown: false}} />

        <Stack.Screen name='Logar' component={Logar} options={{ headerShown: false}} />

        <Stack.Screen name='Confirmacao' component={Confirmacao} options={{ headerShown: false}}/>

        <Stack.Screen name='Capacitacao' component={Capacitacao} options={{ headerShown: false}}/>

        <Stack.Screen name='Atividades' component={Atividades} options={{ headerShown: false}}/>

        <Stack.Screen name='Projetos' component={Projetos} options={{ headerShown: false}}/>


      </Stack.Navigator>
    </NavigationContainer>
  )
}

// o initialRouteName define qual a primeira rota ao aplicativo ser carregado