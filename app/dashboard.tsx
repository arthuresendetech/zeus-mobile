import { router } from 'expo-router';
// router é responsavel por trocar de tela no app dashboard para clientes

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// importando componentes da biblioteca react-native

export default function DashboardScreen() {
  // criando a funcao dashboard

  return (
    // tudo dentro do return será exibido visualmente no app

    <View style={styles.container}>
      {/* caixa principal da tela, recebe o container */}

      <Text style={styles.title}>
        Dashboard Zeus
      </Text>
      {/* título principal, com tamanho, negrito e espacamento aplicado pelo styles.title */}

      <TouchableOpacity
        // fez o card virar um botao clicavel

        style={styles.card}

        onPress={() => router.push('/clientes')}
        // quando clicar, navega para a tela clientes
      >
        <Text style={styles.cardTitle}>Clientes</Text>

        <Text style={styles.cardNumber}>24</Text>
      </TouchableOpacity>

      <View style={styles.card}>
        {/* segundo card */}

        <Text style={styles.cardTitle}>Membros</Text>
        {/* titulo do card */}

        <Text style={styles.cardNumber}>18</Text>
        {/* simula quantidade de membros */}
      </View>

      <View style={styles.card}>
        {/* terceiro card */}

        <Text style={styles.cardTitle}>Equipamentos</Text>
        {/* titulo do card */}

        <Text style={styles.cardNumber}>12</Text>
        {/* simula quantidade de equipamentos cadastrados */}
      </View>

    </View>
  );
}
// fechamento da funcao do dashboard

const styles = StyleSheet.create({
  // criando objeto de estilos

  container: {
    // estilo da tela principal

    flex: 1,
    // faz ocupar toda a tela

    backgroundColor: '#f4f4f4',
    // cor de fundo cinza claro

    padding: 24,
    // espacamento interno da tela
    
    paddingTop: 70,
    // espacamento do conteudo superio, desce o conteudo da tela
  },

  title: {
    // estilo do titulo principal

    fontSize: 28,
    // tamanho da fonte

    fontWeight: 'bold',
    // texto em negrito

    marginBottom: 24,
    // espaco abaixo do titulo
  },

  card: {
    // estilo dos cards

    backgroundColor: '#fff',
    // fundo dos cards branco

    padding: 20,
    // espacamento interno dos cards

    borderRadius: 12,
    // bordas arredondadas

    marginBottom: 16,
    // espaco abaixo de cada card
  },

  cardTitle: {
    // estilo do titulo dentro do card

    fontSize: 18,
    // tamanho da fonte

    marginBottom: 8,
    // espaco abaixo do titulo do card
  },

  cardNumber: {
    // estilo do numero do card

    fontSize: 32,
    // numero grande

    fontWeight: 'bold',
    // numero em negrito
  },
});