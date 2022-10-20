import React, { useState  } from 'react'
import "./Header.css"
import logo from "../Pic/logo.png"

const Header = () => {
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header") 
        header.classList.toggle("active", window.scrollY > 100)
    })

    const [Mobile, setMobile] = useState()
    return (
        <>
            <header className='header'>
                <div className='container d_flex'>
                    <div className='logo'>
                        <img src={logo} alt='' />
                    </div>

                    <div className='navlink'>
                        {/* <ul className='link f_flex uppercase'> */}
                        <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
                            <li><a href="#home">Início</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#resume">Resumo</a></li>
                            <li><a href="#contact">Contato</a></li>
                        </ul>

                        <button className='toggle' onClick={() => setMobile(!Mobile)}>
                            {Mobile ? <i className='fa fa-close close home-btn'></i> : <i className='fa fa-bars open'></i> }
                        </button>
                    </div>
                </div>
            </header>

            <section className='demo'></section>
        </>
    )
}

export default Header