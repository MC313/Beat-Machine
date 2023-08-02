import React from 'react';
import ToggleSwitch from './ToggleSwitch';
import VolumeSlider from './VolumeSlider';
import Button from './Button';

function App() {
  const [powerSwitch, setPower] = React.useState(false);
  const [bankSwitch, setBank] = React.useState(false);
  const [mute, setMute] = React.useState(false);
   
  const handleClick = (e) => {
    setMute((prevValue) => !prevValue);
    console.log('Clicked mute!', mute, e);
  };

  const onPowerSwitchChange = (checked) => {
    setPower(checked);
  };

  const onBankSwitchChange = (checked) => {
    setBank(checked);
  };

  const playBtnSound = (e) => {
    console.log('Play time!')
  }

  return (
    <div id="drum-machine">
        <div id="display">
          <div id="button-row-1">
            <audio
              id='Q'
              className='clip'
              src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
              type='audio/mpeg'
              ></audio>
            <button className='drum-pad' id='Heater-1' onClick={playBtnSound}>Q</button>
            <button className='drum-pad'>W</button>
            <button className='drum-pad'>E</button>
          </div>
          <div id="button-row-2">
            <button className='drum-pad'>A</button><button className='drum-pad'>S</button>
            <button className='drum-pad'>D</button>
          </div>
          <div id="button-row-3">
            <button className='drum-pad'>Z</button><button className='drum-pad'>X</button>
            <button className='drum-pad'>C</button>
          </div>
        </div>
        <div id="controls-wrapper">
          <br />
          <label htmlFor='power-switch'>Power</label>
          <ToggleSwitch id='power-switch' checked={ powerSwitch } onChange={onPowerSwitchChange}  />
          <div name="text-display">
            
          </div>
          <br />
          <label htmlFor='bank-switch'>Bank</label>
          <ToggleSwitch id='bank-switch' checked={ bankSwitch } onChange={onBankSwitchChange}  />
        </div>
          <br />
          <VolumeSlider />
          <Button 
            type='button' 
            name='Mute' 
            id='mute-button' 
            onClick={ handleClick } 
            label='Mute'
          />
    </div>
  );
};

export default App;
