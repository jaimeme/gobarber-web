import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
}

const Input: React.FC<InputProps> = (props) => (
    //botar as propriedades que a função anônima vai receber com base no componente Input que foi criado e usar um spread operator para obter tudo que tem dentro da props
    <Container>
        <input {...props} />
    </Container>
)

export default Input;