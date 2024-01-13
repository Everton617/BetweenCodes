import { useState } from 'react'
import banner from '../assets/img/02.png'

import 'bootstrap/dist/css/bootstrap.min.css';


import '../css/Banner.css'

function Banner() {
   

    return (
        <div className="conteiner-banner">
            <div className="area-bannner">
                <img src={banner} className='img-fluid' alt="" />
                <div className='bannerlink'>
                    <a href="">Comece Já!</a>
                </div>
            </div>

        </div>
    )
}

export default Banner
 