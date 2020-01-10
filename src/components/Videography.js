import React from 'react';
import GeneralNavbar from './GeneralNavbar.js';
import '../styles/videography.css'

const Videography = () => {
    return(
        <div>
            <div className='generalNavbar'>
                <GeneralNavbar />
            </div>
            <header className='videographyHeader'>
                <h1 className='videographyTitle'>Videography</h1>
            </header>
            <main className='videographyMain'>
                <div className='videographyProject'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel similique perferendis, delectus quasi enim pariatur in dolores labore aliquam nemo harum fugiat cumque ea atque sint iste placeat sapiente laborum?</p>
                    <div>
                        ***video here***
                    </div>
                </div>
                <div className='videographyProject'>
                    <div>
                        ***video here***
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt dignissimos quisquam iure, accusantium aperiam repellat sapiente tenetur fuga inventore atque sunt iusto reiciendis vitae, possimus doloribus nam ullam eveniet. Hic.</p>
                </div>
                <div className='videographyProject'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel similique perferendis, delectus quasi enim pariatur in dolores labore aliquam nemo harum fugiat cumque ea atque sint iste placeat sapiente laborum?</p>
                    <div>
                        ***video here***
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Videography