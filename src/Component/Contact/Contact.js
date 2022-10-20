import React from 'react'
import './Contact.css'
import contact1 from '../Pic/contact1.png'
function Contact() {
  return (
    <>
      <section className='Contact' id='contact'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>Contato</h4>
            <h1>Me contate!</h1>
          </div>

          <div className='content d_flex'>
            <div className='left'>
              <div className='box box-shadow'>
                <div className='img'>
                  <img src={contact1} alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact