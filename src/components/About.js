import React from 'react';
import GeneralNavbar from './GeneralNavbar.js';
import '../styles/about.css'

const About = () => {
    return(
        <div>
            <div className='generalNavbar'>
                <GeneralNavbar />
            </div>
            <div className="invisibileBox"></div>
            <header className='header-paralax'>
                <h1>About</h1>
            </header>
            <main>
                <div className='aboutContainer'>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi quo possimus ipsa magni placeat. Maxime dolorem obcaecati rem fugit illum, dolores saepe quibusdam, illo quos velit explicabo architecto praesentium! Provident! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, ullam quia dolore, nulla iusto itaque molestias optio distinctio delectus placeat odio ipsam animi repellat veritatis voluptatem deserunt? Distinctio, est modi! </p>
                    <img src='https://images.unsplash.com/photo-1477160739634-171ff0343882?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1387&q=80' alt='cameraGear' className='aboutImage'/>
                </div>
            </main>

        </div>
    )
}

export default About