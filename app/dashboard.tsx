import { router } from 'expo-router';
// router é responsavel por trocar de tela no app dashboard para clientes

import Card from '@/components/Card';
// importa o componente reutilizavel card

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

        onPress={() => router.push('/clientes')}
        // quando clicar, navega para a tela clientes
      >

        <Card
          titulo="Clientes"
          valor="24"
        />
        {/* componente reutilizavel card */}

      </TouchableOpacity>

      <Card
        titulo="Membros"
        valor="18"
      />
      {/* componente reutilizavel card */}

      <Card
        titulo="Equipamentos"
        valor="12"
      />
      {/* componente reutilizavel card */}

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
    // espacamento do conteudo superior, desce o conteudo da tela
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

});