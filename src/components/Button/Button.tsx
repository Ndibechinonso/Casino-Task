import './Button.scss'
import React from 'react'

type ButtonProps = {
    className: string,
    text: String,
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}


const Button = ({className, text, onClick}: ButtonProps) => {
    return(
        <button className={className} onClick={onClick}>{text}</button>
    )
}

export default Button;