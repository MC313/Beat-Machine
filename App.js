import React from 'react';
import ToggleSwitch from './ToggleSwitch';
import VolumeSlider from './VolumeSlider';
import Button from './Button';
import { DrumPad, PadKeys } from './DrumPad';

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
  
  const playSound = (key) => {
    const audio = document.getElementById(key);
    audio.play();
  
    console.log('Play time!', audio);
  };

 /* const onKeyDown = (e) => {
   console.log(e.keyCode, e.target.id);
  }; */
  
  return (
    <div id="drum-machine">
      <DrumPad  playSound={playSound} />
      
        <div id="controls-wrapper">
          { /*<br />
          <div id="text-display">
            {soundId}
          </div> */}
          <label htmlFor='power-switch'>Power</label>
          <ToggleSwitch id='power-switch' checked={ powerSwitch } onChange={onPowerSwitchChange}  />
          <label htmlFor='bank-switch'>Bank</label>
          <ToggleSwitch id='bank-switch' checked={ bankSwitch } onChange={onBankSwitchChange}  />
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
