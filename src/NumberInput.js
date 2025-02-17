import React from 'react';

const NumberInput = ({ selectedNumbers, setSelectedNumbers, ClearClick, CashClick, RandomClick, isRandomSelection}) => {

    const handleClick = (num) => {

        if (isRandomSelection) {
            return; //this prevents the cashier from deselecting the random selection
        }

        if (selectedNumbers.includes(num)) {
          setSelectedNumbers(selectedNumbers.filter((n) => n !== num)); // Remove number
        } else if (selectedNumbers.length < 5) {
          setSelectedNumbers([...selectedNumbers, num]); // Add number
        } else {
          alert("Only 5 numbers can be selected.");
        }
      };

    return (
        <div className='numbercontainer'>
            {[...Array(20)].map((_, i) => (
            <button
                key={i}
                className={`number-button ${selectedNumbers.includes(i + 1) ? "selected" : ""}`}
                onClick={() => handleClick(i + 1)}
                >
                {i + 1}
            </button>
            ))}
            <div>
                <button className="action-button" onClick={ClearClick}>Clear</button>
                <button className="action-button" onClick={CashClick}>Cash</button>
                <button className="action-button" onClick={RandomClick}>Random</button>
            </div>
    </div>
    )
}

export default NumberInput;