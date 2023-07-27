import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
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
          <label class="power-switch-label" for="power-switch"></label>
          <input type="checkbox" class="power-toggle-switch" name="power-switch" id="power-switch" />
          <div name="text-display"></div>
          <label class="bank-switch-label" for="bank-switch"></label>
          <input type="checkbox" class="bank-toggle-switch" name="bank-switch" id="bank-switch" />
        </div>
      </div>
    </div>
  );
}

export default App;
