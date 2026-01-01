import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import { useIsFocused } from '@react-navigation/native'; // Para saber se a tela está ativa
import CommonStyles from '../styles/CommonStyles';
import GestorDados from '../data/GestorDados';
import ProdutoItem from '../components/ProdutoItem';

export default function ProdutoLista({ navigation }) {
    const [listaProdutos, setListaProdutos] = useState([]);
    const isFocused = useIsFocused(); // True quando voltamos para essa tela
    const gestor = new GestorDados();

    // Função para buscar dados do "banco"
    const carregarLista = async () => {
        const dados = await gestor.obterTodos();
        setListaProdutos(dados);
    };

    // useEffect vigia o 'isFocused'. Se a tela ganhar foco, recarrega a lista.
    useEffect(() => {
        if (isFocused) {
            carregarLista();
        }
    }, [isFocused]);

    const excluir = async (codigo) => {
        await gestor.remover(codigo);
        await carregarLista(); // Atualiza a tela na hora
    };

    return (
        <View style={CommonStyles.container}>
            <TouchableOpacity 
                style={[CommonStyles.button, {marginBottom: 20, backgroundColor: '#28a745'}]} 
                onPress={() => navigation.navigate('Cadastro')}
            >
                <Text style={CommonStyles.buttonText}>+ Novo Produto</Text>
            </TouchableOpacity>

            <FlatList 
                data={listaProdutos}
                keyExtractor={item => item.codigo.toString()}
                renderItem={({item}) => (
                    <ProdutoItem produto={item} onDelete={excluir} />
                )}
                ListEmptyComponent={<Text style={{textAlign:'center', color:'#999'}}>Nenhum produto cadastrado.</Text>}
            />
        </View>
    );
}