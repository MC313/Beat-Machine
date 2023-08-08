import React from 'react';
import ToggleSwitch from './ToggleSwitch';
import VolumeSlider from './VolumeSlider';
import Button from './Button';

function App() {
  const [powerSwitch, setPower] = React.useState(false);
  const [bankSwitch, setBank] = React.useState(false);
  const [mute, setMute] = React.useState(false);
  const [soundId, setSoundId] = React.useState('');

   
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
  setSoundId(e.target.id);
  
    console.log('Play time!', soundId);
  };

  const onKeyDown = (e) => {
   console.log(e.keyCode, e.target.id) ;
  };

  return (
    <div id="drum-machine">
        <div id="display">
          <div id="button-row-1">
              <audio id='Q' type='audio/mpeg' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' className='clip'/>
              <a href="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3">
            <button className='drum-pad' id='Heater-1' onClick={playBtnSound} onKeyDown={onKeyDown}>Q</button></a>
            <audio id='W' type='audio/mpeg' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' className='clip'/>
            <a href="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3">
            <button className='drum-pad' id='Heater-2' onClick={playBtnSound} onKeyDown={onKeyDown}>W</button></a>
            <audio id='E' type='audio/mpeg' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' className='clip'/>
            <a href="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3">
            <button className='drum-pad' id='Heater-3' onClick={playBtnSound} onKeyDown={onKeyDown}>E</button></a>
          </div>
          <div id="button-row-2">
            <audio id='A' type='audio/mpeg' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' className='clip'/>
            <a href="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3">
              <button className='drum-pad' id='Heater-4' onClick={playBtnSound} onKeyDown={onKeyDown}>A</button></a>
            <audio id='S' type='audio/mpeg' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' className='clip'/>
            <a href="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3">
            <button className='drum-pad'id='Clap' onClick={playBtnSound} onKeyDown={onKeyDown}>S</button></a>
            <audio id='Open HH' type='audio/mpeg' src='https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' className='clip'/>
            <a href="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3">
              <button className='drum-pad' id='Open HH' onClick={playBtnSound} onKeyDown={onKeyDown}>D</button></a>
          </div>
          <div id="button-row-3">
            <audio id='Z' type='audio/mpeg' src='https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' className='clip'/>
            <a href="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3">
            <button className='drum-pad' id="Kick-n'-Hat" onClick={playBtnSound} onKeyDown={onKeyDown}>Z</button></a>
            <audio id='X' type='audio/mpeg' src='https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' className='clip'/>
            <a href="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3">
            <button className='drum-pad'id='Kick' onClick={playBtnSound} onKeyDown={onKeyDown}>X</button></a>
            <audio id='C' type='audio/mpeg' src='https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' className='clip'/>
            <a href="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3">
              <button className='drum-pad' id='Closed HH' onClick={playBtnSound} onKeyDown={onKeyDown}>C</button></a>
          </div>
        </div>
        <div id="controls-wrapper">
          <br />
          <div id="text-display">
            {soundId}
          </div>
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
