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

  return (
    <div id="machine-wrapper">
        <div id="button-wrapper">
          <div id="button-row-1">
            <button>Q</button><button>W</button><button>E</button>
          </div>
          <div id="button-row-2">
            <button>A</button><button>S</button><button>D</button>
          </div>
          <div id="button-row-3">
            <button>Z</button><button>X</button><button>C</button>
          </div>
        </div>
        <div id="controls-wrapper">
          <label htmlFor='power-switch'>Power</label>
          <ToggleSwitch id='power-switch' checked={ powerSwitch } onChange={onPowerSwitchChange}  />
          <div name="text-display">
            
          </div>
          <label htmlFor='bank-switch'>Bank</label>
          <ToggleSwitch id='bank-switch' checked={ bankSwitch } onChange={onBankSwitchChange}  />
        </div>
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
