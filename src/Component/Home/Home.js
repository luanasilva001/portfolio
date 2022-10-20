import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import "./Home.css"
import hero from "../Pic/hero.png"
import skill1 from "../Pic/skill1.png"
import skill2 from "../Pic/skill2.png"
import skill3 from "../Pic/skill3.png"


export default function Home() {

    return (
        <>
            <section className='hero' id='home'>
                <div className='container f_flex space top'>
                    <div className='left top'>
                        <h3 style={{ textTransform: 'uppercase' }}>Bem-vindo(a) ao meu portfolio!</h3>
                        <h1>Eu sou a <span>Luana</span></h1>
                        <h2 style={{ color: '#3c3e41' }}>uma
                            <span >
                                
                                <Typewriter
                                    words={[' aprendiz de programação', 'desenvolvedora']}
                                    loop={5}
                                    cursor
                                    cursorStyle='|'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                    
                                />
                            </span></h2>

                        <p>Não sei o que escrever não sei o que escrever não sei o que escrever não sei o que escrever não sei o que escrever não sei o que escrever não sei o que escrever não sei o que escrever não sei o que escrever não sei o que escrever não sei o que escrever</p>

                        <div className='hero_btn d_flex'>
                            <div className='col_1'>
                                <h4>Redes sociais: </h4>
                                <div className='button'>

                                    <button className='btn_shadow'>
                                        <a href='https://github.com/luanasilva001' target="_blank"><i class='fa fa-github'></i></a>
                                    </button>

                                    <button className='btn_shadow'>
                                        <a href='https://www.instagram.com/_luanasilv4/?hl=pt-br' target="_blank"><i class='fa fa-instagram'></i></a>
                                    </button>

                                    <button className='btn_shadow'>
                                        <a href="https://www.linkedin.com/in/luana-silva-08b59a182/" target="_blank"><i class='fa fa-linkedin'></i></a>
                                    </button>
                                </div>
                            </div>
                            <div className='col_1'>
                                <h4>Skills</h4>
                                <button className='btn_shadow'>
                                    <img src={skill1} alt='' />
                                </button>
                                <button className='btn_shadow'>
                                    <img src={skill2} alt='' />
                                </button>
                                <button className='btn_shadow'>
                                    <img src={skill3} alt='' />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='right'>
                        <div className='right_img'>
                            <img src={hero} alt='' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}