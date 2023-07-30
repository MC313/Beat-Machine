import React from 'react';

const Button = ({ type, name, id, handleClick, label }) => (
        <button
                type={type}
                name={name}
                id={id}
                onClick={handleClick}           
            >{ label }
        </button>
    );
    
export default Button;