import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './styles'

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="GoBarber" />

      <form>
        <h1>Faça seu logon</h1>
        {/* o H1 apesar de não ser algo que normalmente fica fora do form, neste caso ele está dentro pq quando se vê o modelo que se está criando o título do formulário realmente faz parte */}
        {/* Pode ser usado o pacote de ícones do react chamado "react-icons" */}
        <input type="text" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Entrar</button>
        <a href="forgot">Esqueci minha senha</a>
      </form>

      <a href="">
        <FiLogIn />
        Criar Conta
      </a>

    </Content>
    <Background></Background>
  </Container>
);

export default SignIn;

// Foi criado um container para poder organizar as duas partes que tem, a primeira é o menu contendo o login e senha do SignIn e a segunda é que fica do lado mas funciona igual um Background por isso o nome de Background, foi separada para poder ser controlada melhor a imagem.
