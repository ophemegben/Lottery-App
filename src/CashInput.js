import React from 'react';

const CashInput = ({ totalCash, onAddCash, canSelectCash, selectedNumbersCount }) => {
    const cashAmounts = [1, 5, 10, 20];
    return (
        <div className='cashcontainer'>
            {cashAmounts.map((amount) => (
            <button
                key={amount}
                className="money-button"
                onClick={() => {
                    if (selectedNumbersCount < 5){
                        alert("Please select 5 numbers first");
                    } else if(!canSelectCash) {
                        alert("Click the Cash button first before selecting money.");
                    } else if (totalCash + amount > 100) {
                        alert("Cannot select more than $100");
                    } else {
                        onAddCash(amount);
                    }
                }}
                >
                ${amount}
            </button>
            ))}
        </div>
    )
};

export default CashInput;