import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/img/logo.png'
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


import '../css/Footer.css'

function Footer() {


    return (
        <div className="conteiner-footer" id='footer'>
            <div className="area-footer">
                <img src={logo} alt="" />
            </div>
            <div className="content-footer">
                <div className='area-contanto'>
                    <h4>Entre em Contato</h4>
                    <div className="box-contato">
                        <p>Telefone: <span>+55 (81) 99712-2632</span></p> <p>Email: <span>codesbetween@gmail.com</span></p>
                    </div>
                </div>

                <div className="content-box">
                    <h4>Redes Sociais</h4>
                    <span>
                        <a href="https://www.instagram.com/betwcodes?igsh=a2Vwdm10bzRiMWpp">
                            <FaInstagram />
                        </a>
                    </span>
                    <span>
                        <a href="https://api.whatsapp.com/send?phone=5581997122632" target='blank'>
                            <FaWhatsapp />
                        </a>
                    </span>
                </div>
            </div>
            <div className='footer-ls'>
                <p>Agência Between Codes © 2024</p>
            </div>
        </div>
    )
}

export default Footer
