import React from 'react';
//import PropTypes from 'prop-types';
import './VolumeBar.scss';

const VolumeBar = () => {
    const [volume, setVolume] = React.useState(50);
    //const [mute, setMute] = React.useState(!mute);
   

    const onButtonChange = (e) => {
        console.log('Clicked!');
        
    };

    return (
        <div>
            <label 
                className='volume-slider-label'
                name='name'
                htmlFor=''
            
            ></label>
            <input
                className='volume-slider'
                name='volume-slider'
                type='range'
                min={0}
                max={100}
                value={volume}
                onChange={e => setVolume(e.target.value)}
            />
            <button
                type='button'
                name='mute-button'
                id='mute-button'
                onChange={onButtonChange}
                //value={mute}            
            >Mute
            </button>
        </div>
    )
}

export default VolumeBar;