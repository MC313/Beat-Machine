import React from 'react';
import ToggleSwitch from './ToggleSwitch';

function App() {
  let [powerSwitch, setPower] = React.useState(false);

  const onPowerSwitchChange = (checked) => {
    setPower(checked);
  };

  return (
    <>
      {/* <div id="machine-wrapper">
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
          <label class="power-switch-label" for="power-switch">Power</label>
          <input type="checkbox" class="power-toggle-switch" name="power-switch" id="power-switch" />
          <div name="text-display"></div>
          <label class="bank-switch-label" for="bank-switch">Bank</label>
          <input type="checkbox" class="bank-toggle-switch" name="bank-switch" id="bank-switch" />
        </div>
  </div> */}
  
      <label htmlFor='power-switch'>Power</label>
      <ToggleSwitch id='power-switch' checked={ powerSwitch } onChange={onPowerSwitchChange}  />
    </>
  );
};

export default App;
