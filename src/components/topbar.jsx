import React, { useState } from 'react';
import { IoCodeSharp } from "react-icons/io5";
import { IoCodeSlash } from "react-icons/io5";
import banner from '../assets/video/banner.mp4'
import bannermd from '../assets/video/banner900.mp4'

import '../css/topbar.css'

function Topbar() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <div className="topbar">
            <div className='nav'>
                <div className='navbar'>
                    <div className="logo"><IoCodeSharp /><a href="#">Between Codes</a><IoCodeSlash /></div>
                    <ul className='links'>
                        <li><a href="">Home</a></li>
                        <li><a href="">Contatos</a></li>
                        <li><a href="">Orçamentos</a></li>

                    </ul>

                    <div className="toggle_btn" onClick={handleMenuClick}>
                        {isMenuOpen ? (
                            <i className="fa-solid fa-x"></i>
                        ) : (
                            <i className="fa-solid fa-bars"></i>
                        )}
                    </div>
                </div>

                <div className={`dropdown_menu ${isMenuOpen ? 'open' : ''}`}>
                    <li><a href="">Home</a></li>
                    <li><a href="">Contatos</a></li>
                    <li><a href="">Orçamentos</a></li>

                </div>
            </div>

            <video className='video-g' src={banner} autoPlay muted loop playsInline type="video/mp4"></video>
            <video className='video-md' src={bannermd} autoPlay muted loop playsInline type="video/mp4"></video>

        </div>
    )
}

export default Topbar
