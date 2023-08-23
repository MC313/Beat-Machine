import React from 'react';
import PropTypes from 'prop-types';
import './ToggleSwitch.scss';

const ToggleSwitch = ({ id, checked, onChange, name, optionLabels, small, disabled }) => {
    const handleKeyPress = (e) => {
        if (e.keyCode !== 32) return;

        e.preventDefault();
        onChange(!checked);
    };

    return (
        <div className={ 'toggle-switch' + (small ? 'small-switch' : '') } >
            <input
                type='checkbox'
                className='toggle-switch-checkbox'
                name={ name }
                id={ id }
                checked={ checked }
                onChange={ e => onChange(e.target.checked) }
                disabled={ disabled }
            />
            { id ? (
                <label
                    className='toggle-switch-label'
                    htmlFor={ id }
                    tabIndex={ disabled ? -1 : 1 }
                    onKeyDown={ (e) => handleKeyPress(e) }

                >
                    <span
                        className={
                            disabled
                                ? 'toggle-switch-inner toggle-switch-disabled'
                                : 'toggle-switch-inner'
                        }
                        data-on={ optionLabels[0] }
                        data-off={ optionLabels[1] }
                        tabIndex={ -1 }
                    />
                    <span
                        className={
                            disabled
                                ? 'toggle-switch-switch toggle-switch-disabled'
                                : 'toggle-switch-switch'
                        }
                        tabIndex={ -1 }
                    />
                </label>
            ) : null }
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

export default ToggleSwitch;