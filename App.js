import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importando nossas telas
import ProdutoLista from './src/screens/ProdutoLista';
import ProdutoForm from './src/screens/ProdutoForm';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        
        <Stack.Screen 
          name="Home" 
          component={ProdutoLista} 
          options={{ title: 'Gestão de Estoque' }}
        />
        
        <Stack.Screen 
          name="Cadastro" 
          component={ProdutoForm} 
          options={{ title: 'Novo Produto' }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}