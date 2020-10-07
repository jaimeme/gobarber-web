// Foram criados os componentes button e input pq eles se repetem diversas vezes no projeto.
import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles'
// Neste import ele vai pegar o componente Container mas ele não vai esquecer que apesar de ter sido passado pra dentro de uma variável Container ele é um button.
//O Container está carregando toda a estilização e assim sempre que for usado o componente button ele vai estar setado também com as estilizações.
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>
//ficou diferente do inputprops pq o input pode receber varios atributos enquanto o button só tem o type
const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
    <Container type="button" {...rest}>
        {children}
    </Container>
)

export default Button;