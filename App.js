import React from 'react';
import './App.css';
import ToggleSwitch from './ToggleSwitch';
import VolumeSlider from './VolumeSlider';
import Button from './Button';
import { PadKeys, TextDisplay } from './DrumPad';

function App() {
  const [powerSwitch, setPower] = React.useState(false);
  const [mute, setMute] = React.useState(false); 
  
  const handleClick = (e) => {
    setMute((prevValue) => !prevValue);
    console.log('Clicked mute!', mute, e);
  };

  const onPowerSwitchChange = (checked) => {
    setPower(checked);
  };
  
  const playSound = (key) => {
    const audio = document.getElementById(key);
    audio.play();
    //document.getElementById(key.id);
    console.log(key);
  };
  
  return (
    <div id="drum-machine">
      <PadKeys playSound={playSound} />
       <div id="controls-wrapper">
         <br />
         <TextDisplay />
          <br />
          <label htmlFor='power-switch'>Power
          <ToggleSwitch id='power-switch' checked={ powerSwitch } onChange={onPowerSwitchChange}  />
          </label>
          <VolumeSlider />
          <Button 
            type='button' 
            name='Mute' 
            id='mute-button' 
            onClick={ handleClick } 
            label='Mute'
          />
      </div>
    </div>
  );
};

export default App;
