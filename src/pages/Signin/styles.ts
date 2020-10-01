import styled from 'styled-components';
import { shade } from 'polished'

import signInBackground from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height:100vh;
  /* 100vh é uma forma de forçar com que fique 100% dependendo do elemento que foi escolhido, neste caso foi a altura, o 100% normal, só funciona se estiver no body e em outros lugares(frase do diego)*/
  display:flex;
  /* como foi colado flex, o conteúdo e o background ficaram um do lado do outro */
  align-items:stretch;
  /* o stretch estica o máximo que puder, mas como existe o content e o background dentro do container, eles ficaram do mesmo tamanho */
`;

export const Content = styled.div`
  display:flex;
  flex-direction:column;
   /* justify-content:center; */
  align-items:center;
  /* uma forma de substituior o justify-content e o place-content é utilizar o place-content, iremos utilizar ele agora, entretanto no final das contas acabou sendo utilizado o align-items center para ajustar os dois inputs, verificar sobre o place-content depois */
  place-content:center;
  width:100%;
  max-width:700px;

  form{
    margin: 80px 0;
    width: 340px;
    text-align:center;


    h1{
      margin-bottom:24px;
    }

    input{
      background:#232129;
      border-radius:10px;
      border:2px solid #232129;
      padding:16px;
      width:100%;
      color:#f4ede8;

      &::placeholder{
        color:#666360;
      }

      & + input{
        margin-top:8px;
      }
      /* todo o input que seja procedido de outro input terá um margin top */
    }

    button{
      background:#ff9000;
      height:56px;
      border-radius:10px;
      border:0;
      padding:0 16px;
      color:#312e38;
      width:100%;
      font-weight:500;
      margin-top:16px;
      transition:background-color 0.2s;
      /* instalar o polished, yarn add polished */
      /* Lembrando que o "&" significa o próprio elemento, por isso foi usado &:hover e não button:hover, pode-se ser usado qualquer um dos dois */
      &:hover{
        background: ${shade(0.2, '#ff9000')};
        /* Assim você escurece 20% com base na cor que foi utilizada */
      }
    }

    a{
      color:#f4ede8;
      display:block;
      margin-top:24px;
      text-decoration:none;
      transition:color 0.2s;

      &:hover{
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a{
    /*Esse sinal de maior faz com que peguem todas as tags "a" dentro de content mas faz com que não entre mais um nível pra dentro, assim não afetando o "a" que está dentro do form, somente o de fora  */
    color:#ff9000;
    display:block;
    margin-top:24px;
    text-decoration:none;
    transition:color 0.2s;

    display:flex;
    align-items:center;
    /* esses dois são pra alinhar o ícone com o texto */
    &:hover{
        color: ${shade(0.2, '#ff9000')};
      }
    svg{
      margin-right:16px;
    }
  }
`;

export const Background = styled.div`
  flex:1;
  /* O flex 1 fará com que ele ocupe todo o espaço restante menos aquels 700px que foram determinados para o content */
  background: url(${signInBackground}) no-repeat center;
  background-size:cover;
  /* o cover fará que a img preencha todo espaço restante, apesar de ter o flex 1 ocupando todo o espaço com o conteúdo da div, não necessariamente a img ocupará os 100% */
`;
