import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = '@produtos_estacio_v2'; // A chave única do banco

export default class GestorDados {
    
    // Adicionar (CREATE)
    async adicionar(produto) {
        try {
            const produtosAtuais = await this.obterTodos();
            produtosAtuais.push(produto);
            await AsyncStorage.setItem(KEY, JSON.stringify(produtosAtuais));
        } catch (e) {
            console.error("Erro ao salvar:", e);
        }
    }

    // Listar (READ)
    async obterTodos() {
        try {
            const jsonValue = await AsyncStorage.getItem(KEY);
            return jsonValue != null ? JSON.parse(jsonValue) : [];
        } catch (e) {
            console.error("Erro ao ler:", e);
            return [];
        }
    }

    // Remover (DELETE)
    async remover(codigo) {
        try {
            let produtos = await this.obterTodos();
            // Recria a lista mantendo APENAS os produtos que NÃO têm aquele código
            const novaLista = produtos.filter(p => p.codigo !== codigo);
            await AsyncStorage.setItem(KEY, JSON.stringify(novaLista));
        } catch (e) {
            console.error("Erro ao remover:", e);
        }
    }
}