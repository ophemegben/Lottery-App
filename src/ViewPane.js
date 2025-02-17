import React from 'react';

const ViewPane = ({ selectedNumbers, totalCash}) => {
    return (
        <div className='viewcontainer'>
            <h3>Selected Numbers: </h3>
            {selectedNumbers.length > 0 && 
                selectedNumbers.map((num, index) => (
                <span key={index}>Mark: {num} <br /></span>
            ))
            }
            <h3>Total Money: ${totalCash}</h3>
        </div>
    )
}

export default ViewPane;