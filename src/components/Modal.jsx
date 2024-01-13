import { useState } from 'react'
import modalg from '../assets/img/modalg.png'
import modalmd from '../assets/img/modalmd.png'
import modalsm from '../assets/img/modalsm.png'
import 'bootstrap/dist/css/bootstrap.min.css';


import '../css/Modal.css'

function Modal() {
   

    return (
        <div className="conteiner-modal">
            <div className="area-modal">
                <img src={modalg} className='img-fluid modalg' alt="" />
                <img src={modalmd} className='img-fluid modalmd' alt="" />
                <img src={modalsm} className='img-fluid modalsm' alt="" />
            </div>

        </div>
    )
}

export default Modal
 