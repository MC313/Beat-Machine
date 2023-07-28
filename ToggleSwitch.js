import React from 'react';
import PropTypes from 'prop-types';
import './ToggleSwitch.scss';

const ToggleSwitch = ({ id, checked, onChange, name, optionLabels, small, disabled }) => {
        return (      
        <div className={'toggle-switch' + (small ? 'small-switch' : '')} >
            <input 
                type='checkbox'
                className='toggle-switch-checkbox'
                name={name}
                id={id}
                checked={checked}
                onChange={e => onChange(e.target.checked)}
                disabled={disabled}
            />
            {id ? (
                <label className='toggle-switch-label' htmlFor={id}>
                    <span 
                        className={
                        disabled
                        ? 'toggle-switch-inner toggle-switch-disabled'
                        : 'toggle-switch-inner' 
                    }
                    data-yes={optionLabels[0]} 
                    data-no={optionLabels[1]} />
                    <span 
                        className={
                            disabled
                            ? 'toggle-switch-switch toggle-switch-disabled'
                            : 'toggle-switch-switch'
                            }
                    />
                </label>
                ) : null}            
            </div>
        );
    };

    //Sets optionLabels for rendering.
ToggleSwitch.defaultProps = {
    optionLabels: ['On', 'Off'],
};

ToggleSwitch.propTypes = {
    id: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string,
    optionLabels: PropTypes.array,
    small: PropTypes.bool,
    disabled: PropTypes.bool,
};

export default ToggleSwitch