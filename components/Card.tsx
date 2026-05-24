import {
    StyleSheet,
    // permite criar estilos organizados
    Text,
    // componente para mostrar textos
    View,
} from 'react-native';
// importando componentes da biblioteca react-native

type CardProps = {
  // define os dados que o card vai receber

  titulo: string;
  // texto do titulo do card

  valor: string;
  // valor principal mostrado no card

};

export default function Card({
  titulo,
  valor,
}: CardProps) {
  // criando componente reutilizavel card

  return (
    // tudo dentro do return sera mostrado visualmente

    <View style={styles.card}>
      {/* caixa principal do card */}

      <Text style={styles.titulo}>
        {titulo}
      </Text>
      {/* mostra o titulo recebido no card */}

      <Text style={styles.valor}>
        {valor}
      </Text>
      {/* mostra o valor recebido no card */}

    </View>

  );

}
// fechamento da funcao Card

const styles = StyleSheet.create({
  // criando objeto de estilos

  card: {
    // estilo principal do card

    backgroundColor: '#fff',
    // fundo branco

    padding: 24,
    // espacamento interno

    borderRadius: 16,
    // bordas arredondadas

    marginBottom: 20,
    // espaco abaixo do card

  },

  titulo: {
    // estilo do titulo do card

    fontSize: 18,
    // tamanho da fonte

    marginBottom: 12,
    // espaco abaixo do titulo

  },

  valor: {
    // estilo do valor principal

    fontSize: 42,
    // tamanho grande da fonte

    fontWeight: 'bold',
    // texto em negrito

  },

});