import React from 'react'

const Card = (props) => {
    return (
        <>
            <div className='box btn_shadow'>
                <img src={props.image} />
                <h2>{props.title}</h2>
                <p>{props.desc}</p>

                <a href='https://www.npmjs.com/package/react-simple-typewriter' target="_blank">
                    <i className='fa fa-arrow-right'></i>
                </a>
            </div>
        </>
    )
}

export default Card