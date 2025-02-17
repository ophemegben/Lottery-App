import './App.css';
import React , {useState} from 'react';
import CashInput from './CashInput.js';
import NumberInput from './NumberInput.js';
import ViewPane from './ViewPane.js';

function App() {

  const [selectedNumbers, setSelectedNumbers] = useState([]); // State for selected numbers
  const [totalCash, setTotalCash] = useState(0); // State for total money
  const [confirmedNumbers, setConfirmedNumbers] = useState([]);
  const [canSelectCash, setCanSelectCash] = useState(false);


  const handleAddCash = (amount) => {
    if (totalCash + amount > 100) {
      alert("Cannot select more than $100");
    } else {
      setTotalCash(totalCash + amount);
    }
  };

  const handleRandomInput = () => {
    let randomNumbers = [];
    while (randomNumbers.length < 5) {
      let num = Math.floor(Math.random() * 20) + 1;
      if (!randomNumbers.includes(num)) {
        randomNumbers.push(num);
      }
    }
    setSelectedNumbers(randomNumbers);
    setConfirmedNumbers([]);
    setTotalCash(0);
    setCanSelectCash(false);
  };


  const handleCashClick = () => {
    if (selectedNumbers.length < 5) {
      alert("Please select 5 numbers before proceeding to cash.");
    } else {
      setConfirmedNumbers(selectedNumbers); // Update ViewPane with selected numbers
      setCanSelectCash(true);
    }
  };

  return (
    <div className="container">
      <div className='headercontainer'>
        <h1>WHE WHE on D'Avenue</h1>
      </div>   

      <div className='bodycontainer'>
        <div className="left-container">
          {/* Passing props to NumberInput */}
          <NumberInput 
            selectedNumbers={selectedNumbers} 
            onSelect={setSelectedNumbers}
            onClear={() => {
              setSelectedNumbers([]); // Reset numbers
              setTotalCash(0); // Reset cash
              setConfirmedNumbers([]);
              setCanSelectCash(false);
            }}
            onRandom={handleRandomInput}
            onCashClick={handleCashClick}
            
            />

          {/* Passing props to CashInput */}
          <CashInput 
            totalCash={totalCash} 
            onAddCash={handleAddCash} 
            canSelectCash={canSelectCash}
            selectedNumbersCount={selectedNumbers.length}
          />
        </div>
        {/* Passing props to ViewPane */}
        <ViewPane 
          selectedNumbers={confirmedNumbers} 
          totalCash={totalCash} 
        />
      </div>
    </div> 
    
  );
}

export default App;
