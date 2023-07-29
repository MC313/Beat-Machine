import React from 'react';
import ToggleSwitch from './ToggleSwitch';

function App() {
  const [powerSwitch, setPower] = React.useState(false);
  const [bankSwitch, setBank] = React.useState(false);
  

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
          <div class='power-toggle'></div>
          <label htmlFor='power-switch'>Power</label>
          <ToggleSwitch id='power-switch' checked={ powerSwitch } onChange={onPowerSwitchChange}  />
          <div name="text-display"></div>
          <label htmlFor='bank-switch'>Bank</label>
          <ToggleSwitch id='bank-switch' checked={ bankSwitch } onChange={onBankSwitchChange}  />
        </div>
    </div>
  );
};

export default App;
