import React from 'react'

import './modal.css'

const Modal = () => {
    return <div className="modal__wrapper">
        <div className="modal">
            <h6>Place a Bid</h6>
            <p>You must bid atleast<span>5.89ETH</span></p>

            <div className="input__item">
                <h6>Enter Quantity, 7 available</h6>
                <input type="number" placeholder='00 : 00 ETH' />
            </div>
            <div>
                <p></p>
            </div>
      </div>
  </div>
}

export default Modal