import './App.css';
import CashInput from './CashInput.js';
import NumberInput from './NumberInput.js';
import ViewPane from './ViewPane.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
        <p>Begin lottery app</p>
        <CashInput/>
        <NumberInput/>
        <ViewPane/>
        </div>
        
      </header>
    </div>
  );
}

export default App;
