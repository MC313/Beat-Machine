import React from 'react';

const Button = ({ type, name, id, value, handleClick, label }) => {
    return (
        <button
                type={type}
                name={name}
                id={id}
                onClick={handleClick}
                value={value}            
            >{ label }
        </button>
    );
};

export default Button;