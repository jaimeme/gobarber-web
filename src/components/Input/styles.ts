import styled from 'styled-components'

export const Container = styled.div`

background:#232129;
border-radius:10px;
border:2px solid #232129;
padding:16px;
width:100%;
color:#666360;

display: flex;
align-items:center;

& + div{
    margin-top:8px;
}

// O código inicial era & + input, entretanto agora é div com o nome de container, o input virou um espaço em branco pequeno no meio

input{   
    flex: 1;
    background:transparent;
    border:0px;

    &::placeholder{
      color:#666360;
    }

    > svg {
        margin-right:16px;
    }
  }
`;