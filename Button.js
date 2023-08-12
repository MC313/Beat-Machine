import React from 'react';
import './Button.scss';

const Button = ({ type, name, id, onClick, label }) => (
        <button
                type={type}
                name={name}
                id={id}
                onClick={onClick}           
            >{ label }
        </button>
    );

export default Button;