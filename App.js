import React from 'react';
import './App.css';
import ToggleSwitch from './ToggleSwitch';
import Button from './Button';
import { PadKeys, TextDisplay } from './DrumPad';

function App() {
  const [powerSwitch, setPower] = React.useState(false);
  const [mute, setMute] = React.useState(false);
  const [soundId, setSoundId] = React.useState('');
  
  const handleClick = (e) => {
    setMute((prevValue) => !prevValue);
    console.log('Clicked mute!', mute, e);
  };

  const onPowerSwitchChange = (checked) => {
    setPower(checked);
  };
  
  const playSound = (key, id) => {
    setSoundId(id);
    const audio = document.getElementById(key);
    audio.play();
    console.log(key);
  };
  
  return (
    <div id="drum-machine">
      <PadKeys playSound={playSound} />
       <div id="controls-wrapper">
         <TextDisplay id="text-display" soundId={soundId} />
          <ToggleSwitch id='power-switch' checked={ powerSwitch } onChange={onPowerSwitchChange}  />
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
