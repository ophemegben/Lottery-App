import React from 'react';

const CashInput = ({handleCashAdd}) => {
    const cashAmounts = [1, 5, 10, 20];
    return (
        <div className='cashcontainer'>
            {cashAmounts.map((amount) => (
            <button
                key={amount}
                className="money-button"
                onClick={() => handleCashAdd(amount)}
                >
                ${amount}
            </button>
            ))}
        </div>
    )
};

export default CashInput;