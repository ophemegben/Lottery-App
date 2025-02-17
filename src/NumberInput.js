import React from 'react';

const NumberInput = ({ selectedNumbers, onSelect, onClear, onCashClick, onRandom, isRandomSelection}) => {

    const handleClick = (num) => {

        if (isRandomSelection) {
            return; //this prevents the cashier from deselecting the random selection
        }

        if (selectedNumbers.includes(num)) {
          onSelect(selectedNumbers.filter((n) => n !== num)); // Remove number
        } else if (selectedNumbers.length < 5) {
          onSelect([...selectedNumbers, num]); // Add number
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
            <div className="action-buttons">
                <button className="action-button" onClick={onClear}>Clear</button>
                <button className="action-button" onClick={onCashClick}>Cash</button>
                <button className="action-button" onClick={onRandom}>Random</button>
            </div>
    </div>
    )
}

export default NumberInput;