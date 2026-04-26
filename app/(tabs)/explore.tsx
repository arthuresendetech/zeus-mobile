import { View, Text, StyleSheet } from 'react-native'; //importando da biblioteca react-native. view agrupa elementos. text mostra texto na tela. stylesheet organiza os estilos do componente.

export default function DashboardScreen() { //funcao chamada dashboardscreen. representa a tela do app. export default permite ser usado por fora, mostrado na aba correspondente.
  return (
  <View style={styles.container}>
    <Text style={styles.title}>Zeus</Text>
    <Text style={styles.subtitle}>Sistema de Gestão Interna</Text>

    <View style={styles.card}>
      <Text style={styles.cardTitle}>Resumo</Text>
      <Text>Projetos ativos: 5</Text>
      <Text>Membros ativos: 12</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({ //crio objeto styles
  container: {
    flex: 1, //faz a view ocupar todo espaco disponivel na tela
    justifyContent: 'center', //centraliza os elementos no eixo vertical, de cima para baixo
    alignItems: 'center', //centraliza no eixo horizontal, no meio da esquerda para direita
    padding: 24, //espacamento interno de 24 unidades. conteudo nao grudar nas bordas
  },
  title: {
    fontSize: 30, //tamanho da fonte
    fontWeight: 'bold', //texto em negrito
  },
  subtitle: {
    fontSize: 18,
    marginTop: 8, //cria espaco acima do subtitulo
    textAlign: 'center', //centraliza o texto dentro dele mesmo. util quando quebra de linha
  },
  card: {
  marginTop: 20,
  padding: 16,
  backgroundColor: '#eee',
  borderRadius: 10,
  width: '100%',
},

cardTitle: {
  fontWeight: 'bold',
  marginBottom: 8,
},
});