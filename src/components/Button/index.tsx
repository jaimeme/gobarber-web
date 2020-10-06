// Foram criados os componentes button e input pq eles se repetem diversas vezes no projeto.
import React, { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>
//ficou diferente do inputprops pq o input pode receber varios atributos enquanto o button só tem o type
const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
    <button type="button" {...rest}>
        {children}
    </button>
)

export default Button;