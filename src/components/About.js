import React from 'react';
import HomeNavbar from './HomeNavbar.js'

const About = () => {
    return(
        <div>
            <header>
                <h2>Kevin Nguyen</h2>
                <HomeNavbar />
            </header>
            <main>
                <div>
                    <h1>About</h1>
                    <p>Within this parent div, give it a background image to create a paralax.</p>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio facere voluptates illum et neque voluptas rerum ut nihil adipisci corporis sunt unde alias officia reiciendis eaque exercitationem odit, ipsam quasi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ad ratione ab atque quis. Dolor enim nostrum incidunt distinctio quidem in nesciunt, asperiores, officiis accusamus eos, veritatis blanditiis voluptatem maxime?</p>
                </div>
                <div>
                    <p>Statement about your passions.</p>
                </div>
                <div>
                    <p>Statement about your goals.</p>
                </div>
            </main>
        </div>
    )
}

export default About