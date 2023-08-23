import React from 'react';
//import PropTypes from 'prop-types';
import './VolumeBar.scss';

const VolumeBar = () => {
    const [volume, setVolume] = React.useState(50);

    return (
        <div>
            <label 
                className='volume-slider-label'
                name='name'
                htmlFor='volume-slider'
            
            ></label>
            <input
                className='volume-slider'
                id='volume-slider'
                name='volume-slider'
                type='range'
                min={0}
                max={100}
                value={volume}
                onChange={e => setVolume(e.target.value)}
            />
        </div>
    )
}

export default VolumeBar;