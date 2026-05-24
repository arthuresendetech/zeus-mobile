import { StyleSheet, Text, View } from 'react-native'; //importando os componentes da biblioteca do react native

export default function ClientesScreen() {
  //criando a funcao clientesScreen

  return (
    //tudo que estiver dentro do return sera mostrado na tela

    <View style={styles.container}>
      {/* caixa principal da tela, recebe o estilo container */}

      <Text style={styles.title}>
        Clientes
      </Text>
      {/* titulo principal, com tamanho, negrito e espacamento controlado por styles.title */}

      <View style={styles.card}>
        {/* primeiro card, cada card representa um cliente cadastrado */}

        <Text style={styles.clientName}>
          Empresa Alfa
        </Text>
        {/* nome do cliente maior e em negrito */}

        <Text>Status: Ativo</Text>
        {/* mostra o status do cliente */}

        <Text>Responsável: Squad Zeus</Text>
        {/* mostra o membro responsavel pelo cliente */}

      </View>
      {/* fechamento do primeiro card */}

      <View style={styles.card}>
        {/* segundo card de cliente */}

        <Text style={styles.clientName}>
          Cliente Beta
        </Text>
        {/* nome do segundo cliente */}

        <Text>Status: Com demanda</Text>
        {/* situacao atual do cliente */}

        <Text>Responsável: Projetos</Text>
        {/* responsavel associado ao cliente */}

      </View>
      {/* fechamento do segundo card */}

    </View>
    //* fechamento da caixa principal da tela *

  );
  //fechamento do return
}
//fechamento da funcao clientes

const styles = StyleSheet.create({
  //criando objeto chamado styles

  container: {
    //estilo da tela principal

    flex: 1,
    //faz a tela ocupar todo espaco disponivel

    padding: 24,
    //espacamento interno da tela

    paddingTop: 70,
    // espacamento do conteudo superio, desce o conteudo da tela

    backgroundColor: '#f4f4f4',
    //fundo cinza claro
  },

  title: {
    //estilo do titulo principal

    fontSize: 28,
    //tamanho da fonte

    fontWeight: 'bold',
    //texto em negrito

    marginBottom: 24,
    //espaco interno abaixo do titulo
  },

  card: {
    //estilo dos cards dos clientes

    backgroundColor: '#fff',
    //fundo branco do card

    padding: 16,
    //espacamento interno do card

    borderRadius: 12,
    //bordas arredondadas

    marginBottom: 16,
    //espaco abaixo de cada card
  },

  clientName: {
    //estilo do nome do cliente

    fontSize: 18,
    //tamanho da fonte

    fontWeight: 'bold',
    //texto em negrito

    marginBottom: 8,
    //espaco abaixo do nome do cliente
  },
});