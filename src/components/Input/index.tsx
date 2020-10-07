import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons'

import { Container } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon?: React.ComponentType<IconBaseProps>;
    // Para pegar as propriedades que estão dentro de Icon 
    //Quando você quiser usar um componente, como é da biblioteca instalada react-icons e passar ele como "tipo", ou seja, na tipagem. O "?:" demonstra que o icon é opcional.
}

const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => (
    //botar as propriedades que a função anônima vai receber com base no componente Input que foi criado e usar um spread operator para obter tudo que tem dentro da props, depois o props virou rest pq foi passado o icon
    // como o objetivo é pegar o icon da interface, se fosse escrito "icon" como tag para poder mostrar o ícone, o javascript não iria reconhecer ele como componente, então icon ficou representado como Icon
    <Container>
        {Icon && <Icon size={20} />}
        <input {...rest} />
    </Container>
)

export default Input;