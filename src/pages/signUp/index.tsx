import React from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input'
import Button from '../../components/Button'

import { Container, Content, Background } from './styles'

const SignUp: React.FC = () => (
  <Container>
    <Background></Background>

    <Content>
      <img src={logoImg} alt="GoBarber" />

      <form>
        <h1>Faça seu cadastro</h1>
        <Input
          name="nome"
          type="text"
          placeholder="Nome"
          icon={FiUser}
        />
        <Input
          name="email"
          type="text"
          placeholder="E-mail"
          icon={FiMail}
        />
        <Input
          name="password"
          type="password"
          placeholder="Senha"
          icon={FiLock}
        />
        <Button type="submit">Cadastrar</Button>
      </form>

      <a href="">
        <FiArrowLeft />
        Criar Conta
      </a>

    </Content>
    {/* Para inverter o lado do background, foi só preciso botar o background antes de vir o content */}
  </Container>
);

export default SignUp;
