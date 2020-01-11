import React from 'react'
import GeneralNavbar from './GeneralNavbar.js'


const Contact = () => {
    return(
        <div>
            <div className='generalNavbar'>
                <GeneralNavbar />
            </div>
            <header className='contactHeader'>
                <h1 className='contactTitle'>Contact</h1>
            </header>
            <main>
                <div>
                    <img src='https://img.icons8.com/plasticine/2x/phone.png' alt='phone number'/>
                    <img src='https://img.icons8.com/color/2x/important-mail.png' alt='email'/>
                    <img src='https://img.icons8.com/plasticine/2x/youtube.png' alt='youtube'/>
                    <img src='https://img.icons8.com/officel/2x/instagram-new.png' alt='instagram'/>
                    <img src='https://img.icons8.com/color/2x/facebook.png' alt='facebook'/>
                </div>
                <div>
                    <p>801-243-8654</p>
                    <p>kevinl_nguyen@yahoo.com</p>
                    <a href='https://www.youtube.com/teamrookie'>https://www.youtube.com/teamrookie</a>
                    <a href='https://www.facebook.com/kevin.nguyen.39904'>https://www.facebook.com/kevin.nguyen.39904</a>
                    <a href='https://www.instagram.com/ikevinnguyen/'>https://www.instagram.com/ikevinnguyen/</a>
                </div>
            </main>
        </div>
    )
}

export default Contact