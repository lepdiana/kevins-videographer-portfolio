import React from 'react';
import Navbar from '../components/Navbar.js'
import '../styles/home.css'

const Home = () => {
    return(
        <div className='homeContainer'>
            <header>
                <h1>Kevin Nguyen</h1>
            </header>
            <main>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus beatae perferendis, reprehenderit doloremque dolor repellendus nesciunt, sunt tempore eum tenetur magni rem nihil maxime labore natus accusamus aspernatur veritatis molestias? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum molestias id perspiciatis dolorum et necessitatibus alias, numquam placeat! Quo voluptate laboriosam doloremque earum dolorum ut repellendus perferendis facere natus quod.
            </main>
            <div>
                <Navbar />
            </div>
        </div>
    )
}

export default Home