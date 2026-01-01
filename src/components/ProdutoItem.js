import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ProdutoItem({ produto, onDelete }) {
    return (
        <View style={styles.itemArea}>
            <View>
                <Text style={styles.nome}>{produto.nome}</Text>
                <Text style={styles.detalhes}>Cód: {produto.codigo} | Qtd: {produto.quantidade}</Text>
            </View>
            
            <TouchableOpacity onPress={() => onDelete(produto.codigo)} style={styles.botaoDelete}>
                <Text style={styles.textoDelete}>X</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    itemArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 15,
        marginBottom: 10,
        borderRadius: 8,
        elevation: 2, // Sombra leve (Android)
    },
    nome: { fontWeight: 'bold', fontSize: 16, color: '#333' },
    detalhes: { color: '#666', marginTop: 5 },
    botaoDelete: { backgroundColor: '#ff4444', padding: 10, borderRadius: 5 },
    textoDelete: { color: '#fff', fontWeight: 'bold' }
});