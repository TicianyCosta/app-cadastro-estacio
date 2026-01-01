import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import CommonStyles from '../styles/CommonStyles';
import GestorDados from '../data/GestorDados';
import Produto from '../data/Produto';

export default function ProdutoForm({ navigation }) {
    // Hooks de estado (variáveis temporárias da tela)
    const [codigo, setCodigo] = useState('');
    const [nome, setNome] = useState('');
    const [quantidade, setQuantidade] = useState('');

    const salvar = async () => {
        if (!codigo || !nome || !quantidade) {
            Alert.alert("Erro", "Preencha todos os campos!");
            return;
        }

        const gestor = new GestorDados();
        const novoProduto = new Produto(codigo, nome, quantidade);
        
        await gestor.adicionar(novoProduto);
        
        Alert.alert("Sucesso", "Produto cadastrado!");
        navigation.goBack(); // Volta para a tela anterior
    };

    return (
        <View style={CommonStyles.container}>
            <Text style={{marginBottom: 20, fontSize: 18, fontWeight: 'bold', color: '#333'}}>
                Preencha os dados:
            </Text>

            <TextInput 
                style={CommonStyles.input} 
                placeholder="Código (Ex: 10)"
                keyboardType="numeric"
                value={codigo}
                onChangeText={setCodigo}
            />
            <TextInput 
                style={CommonStyles.input} 
                placeholder="Nome do Produto"
                value={nome}
                onChangeText={setNome}
            />
            <TextInput 
                style={CommonStyles.input} 
                placeholder="Quantidade"
                keyboardType="numeric"
                value={quantidade}
                onChangeText={setQuantidade}
            />

            <TouchableOpacity style={CommonStyles.button} onPress={salvar}>
                <Text style={CommonStyles.buttonText}>Salvar</Text>
            </TouchableOpacity>
        </View>
    );
}