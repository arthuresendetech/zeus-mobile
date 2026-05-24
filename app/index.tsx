import { router } from 'expo-router';
// router é responsavel por trocar de tela no app login para dashboard para clientes

import {
  StyleSheet,
  // permite criar estilos organizados
  Text,
  // componente para mostrar textos
  TextInput,
  // componente para criar campos digitáveis
  TouchableOpacity,
  // componente para criar botão clicável
  View,
} from 'react-native';
// importando componentes da biblioteca react-native

export default function LoginScreen() {
  // criacao da tela de login e permissao para o expo router usar essa tela no app

  return (
    // tudo que estiver dentro do return será mostrado visualmente no app

    <View style={styles.container}>
      {/* essa view é container principal da tela, envolve título, subtítulo, campos de email e senha, esqueci de senha */}

      <Text style={styles.title}>
        Zeus
      </Text>
      {/* mostra o texto Zeus na tela */}

      <Text style={styles.subtitle}>
        Sistema de Gestão Interna
      </Text>
      {/* mostra o subtítulo */}

      <TextInput
        // cria o campo para digitar o email

        style={styles.input}

        placeholder="E-mail"
        // mostra "E-mail" no campo antes de ser digitado

        keyboardType="email-address"
        // abre um teclado adequado para e-mail no celular
      />

      <TextInput
        // cria o campo para senha

        style={styles.input}

        placeholder="Senha"
        // mostra senha no campo antes de ser digitado

        secureTextEntry
        // oculta os caracteres digitados
      />

      <TouchableOpacity
        // botao clicavel

        style={styles.button}
        // aplica cor, padding, arredondamento e aparencia do botao

        onPress={() => router.push('/dashboard')}
        // quando clicar execute isso () e navega para a tela dashboard
      >

        <Text style={styles.buttonText}>
          Entrar
        </Text>

      </TouchableOpacity>

      <TouchableOpacity>
        {/* cria a area clicavel para recuperacao de senha */}

        <Text style={styles.forgotPassword}>
          Esqueci minha senha
        </Text>

      </TouchableOpacity>

    </View>
    // fechamento da view

  );

}
// fechamento da funcao LoginScreen

const styles = StyleSheet.create({
  // criacao de estilos dentro de styles

  container: {

    flex: 1,
    // faz a tela ocupar todo o espaco disponivel

    padding: 24,
    // espacamento interno nas bordas

    justifyContent: 'center',
    // centraliza verticalmente

    backgroundColor: '#fff',
    // fundo branco

  },

  title: {

    fontSize: 36,
    // tamanho grande da fonte

    fontWeight: 'bold',
    // negrito

    textAlign: 'center',
    // centraliza o texto

    marginBottom: 8,
    // cria espaco abaixo do titulo

  },

  subtitle: {

    fontSize: 16,
    // tamanho do texto

    textAlign: 'center',
    // centralizado

    marginBottom: 32,
    // cria espaco abaixo do subtitulo

  },

  input: {
    // vale para os campos de email e senha

    borderWidth: 1,
    // cria borda

    borderColor: '#ccc',
    // deixa a borda cinza clara

    borderRadius: 8,
    // arredonda as bordas

    padding: 14,
    // espaco interno dentro do campo

    marginBottom: 16,
    // espaco abaixo de cada campo

    fontSize: 16,
    // tamanho do texto digitado

  },

  button: {
    // estilo do botao

    backgroundColor: '#111',
    // botao quase preto

    padding: 16,
    // altura interna do botao

    borderRadius: 8,
    // cantos arredondados

    marginTop: 8,
    // espaco acima do botao

  },

  buttonText: {

    color: '#fff',
    // texto branco

    textAlign: 'center',
    // centraliza

    fontWeight: 'bold',
    // negrito

    fontSize: 16,
    // tamanho da fonte

  },

  forgotPassword: {
    // esqueci minha senha

    textAlign: 'center',
    // centraliza

    marginTop: 16,
    // cria espaco acima

    fontSize: 14,
    // texto menor que o botao

  },

});