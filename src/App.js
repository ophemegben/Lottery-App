import './App.css';
import React , {useState} from 'react';
import CashInput from './CashInput.js';
import NumberInput from './NumberInput.js';
import ViewPane from './ViewPane.js';

function App() {

  const [selectedNumbers, setSelectedNumbers] = useState([]); // State for selected numbers
  const [totalCash, setTotalCash] = useState(0); // State for total money
  const [confirmedNumbers, setConfirmedNumbers] = useState([]); //State that converts selected numbers to confirmed numbers after cash is clicked
  const [canSelectCash, setCanSelectCash] = useState(false); //State for cash button clicking
  const [isRandomSelection, setIsRandomSelection] = useState(false); //State for random selection


  const handleCashAdd = (amount) => {
    if (selectedNumbers.length < 5) { 
      alert("Please select 5 numbers first")
    }
    else if (!canSelectCash) {
      alert("Click the Cash button first before selecting money");
    }
    else if (totalCash + amount > 100) {
      alert("Cannot select more than $100");
    } else {
      setTotalCash(totalCash + amount);
    }
  };

  //Function to handle random input when the cashier does not pick the number values 
  const handleRandomInput = () => {
    let randomNumbers = [];
    while (randomNumbers.length < 5) {
      let num = Math.floor(Math.random() * 20) + 1;
      if (!randomNumbers.includes(num)) {
        randomNumbers.push(num);
      }
    }
    setSelectedNumbers(randomNumbers); //Updates the selectedNumbers state with the random numbers generated 
    setConfirmedNumbers([]); //ConfirmedNumbers state is updated to an empty array in the case where it contained some values
    setTotalCash(0); //TotalCash state is set to 0 as the cashier will need to click on cash before the money amounts are picked
    setCanSelectCash(false); //CanSelectCash is reset to false 
    setIsRandomSelection(true); //IsRandomSelection is set to true
  };


  //Function to confirm number selection 
  const handleCashClick = () => {
    if (selectedNumbers.length < 5) { //Checks if the selectedNumbers state contains 5 numbers in the array
      alert("Please select 5 numbers before proceeding to cash.");
    } else {
      setConfirmedNumbers(selectedNumbers); // Updates the confirmedNumbers state with the 5 selected numbers. This Update ViewPane
      setCanSelectCash(true); //canSelectCash is then set to true to allow the cashier input the money value
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
            setSelectedNumbers={setSelectedNumbers}
            ClearClick={() => {
              setSelectedNumbers([]); // Resets the selected numbers
              setTotalCash(0); // Reset the total cash amount
              setConfirmedNumbers([]); //Resets confirmed numbers
              setCanSelectCash(false);
            }}
            RandomClick={handleRandomInput}
            CashClick={handleCashClick}
            isRandomSelection={isRandomSelection}
            />

          {/* Passing props to CashInput */}
          <CashInput 
            handleCashAdd={handleCashAdd} 
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
