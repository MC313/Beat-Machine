import React from 'react';

const VolumeSlider = () => {
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

export default VolumeSlider;