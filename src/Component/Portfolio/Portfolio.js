import React, { useEffect, useState } from 'react'
import "./Portfolio.css"
import Card from './Card'
import axios from 'axios'

export default function Portfolio() {

    const [projects, setProjects] = useState([])
    const [setErrorMsg] = useState("")


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
            <section className='portfolio top' id='portfolio'>
                <div className='container'>
                    <div className='heading text-center'>
                        {/* <h4>Me dê um feedback sobre o que achou do meu portfolio! </h4> */}
                        <h1>Meu portfolio</h1>
                    </div>
                    <div className='content grid'>
                        {
                            projects.slice(0, 3).map((project) =>
                                <Card key={project.id}
                                    title={project.name}
                                />
                            )
                        }
                    </div>
                </div>
            </section>

        </>
    )
}