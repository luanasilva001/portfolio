import React, { useEffect, useState } from "react"
import axios from 'axios'

const Card = (props) => {
    const [projects, setProjects] = useState([])
    const [setErrorMsg] = useState("")

    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }

    if (modal) {
        document.body.classList.add("active-modal")
    } else {
        document.body.classList.remove("active-modal")
    }

    function getApiGit() {
        axios.get('https://api.github.com/users/luanasilva001/repos', {
        })

            .then(function (response) {
                // console.log('to aqui');
                setProjects(response.data)
            })
            .catch(function (error) {
                console.log(error)
                setErrorMsg("git fora de serviço...")
            })
    }

    useEffect(() => {
        getApiGit()
    }, [])

    return (
        <>
            <div className='box btn_shadow '>
                <div className='img'>
                    <img src={props.image} alt='' onClick={toggleModal} />
                </div>
                <div className='category d_flex'>
                    <span onClick={toggleModal}>{props.category}</span>
                    <label>
                        <i className='fa fa-heart'></i> {props.totalLike}
                    </label>
                </div>
                <div className='title'>
                    <h2 onClick={toggleModal}>{props.title}</h2>
                    <a href='#popup' className='arrow' onClick={toggleModal}>
                        <i class='fa fa-arrow-right'></i>
                    </a>
                </div>
            </div>

            {/* Popup box */}
            {modal && (
                <div className='modal'>
                    <div onClick={toggleModal} className='overlay'></div>
                    <div className='modal-content d_flex'>
                        <div className='modal-img left'>
                            <img src={props.image} alt='' />
                        </div>
                        <div className='modal-text right'>
                            <span>Projeto final de curso</span>
                            <h1>{props.title}</h1>
                            {
                            projects.map((project) =>
                                <div key={project.id}>
                                    <p>{project.description}</p> 
                               </div >
                            )
                        }
                            {/* <p>não sei o que escrever não sei o que escrever não sei o que escrever não sei o que escrevernão sei o que escreverv não sei o que escreverv v não sei o que escrevernão sei o que escrever</p> */}
                            <div className='button f_flex mtop'>
                                
                                <button className='btn_shadow'>
                                {
                            projects.slice(0,1).map((project) =>
                                <div key={project.id}>
                                  {/* <a href={project.html_url} target='_blank'>view</a> */}
                                  {/* <input className='close-modal btn_shadow' type="button" onclick={project.html_url} value="Go to Google" /> */}
                                  <input type="button" value="Add Courses" onclick="window.location.href='Courses.html'"/>

                               </div >
                            )
                        }
                                    {/* VIEW PROJECT<i class='fa fa-chevron-right'></i> */}
                                </button>
                            </div>

                            
                            {/* <button className='close-modal btn_shadow' onClick={toggleModal}>
                                <i class='fa fa-times'></i>
                            </button> */}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Card