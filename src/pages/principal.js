import React from "react"
import "../pages/styles.scss"

const Principal  = () => {
    return (
        <div className="columns is-centered is-desktop is-vcentered">
            <div className="column is-6 has-text-centered ">
                <img src="profile-image.png" className="is-centered" alt="profile"/>
                <div className="content has-text-centered">              
                    <a className="m-3"  href="https://www.linkedin.com/in/david-alvarez-b6440854">
                        <img src="linkedin-logo.png" alt="Logo_linkedin" />
                    </a>
                    <a className="m-3" href="https://github.com/Reebook">
                        <img src="github-logo.png" alt="Logo_github" />
                    </a>
                    <a className="m-3"  href="https://twitter.com/dalvarezher">
                        <img src='twitter-logo.png' alt="Logo_twitter" />
                    </a>
                </div>
            </div>
            <div className="column is-6 ">
                
                <p className="content has-text-centered is-size-4">
                    Hola!
                    Soy desarrollador de aplicaciones Web y Móvil, me entusiasma aprender nuevas tecnologías, por lo que 
                    estaré compartiendo algunas ideas.
                </p>

                
            </div>
        </div>
    )
}


export default Principal