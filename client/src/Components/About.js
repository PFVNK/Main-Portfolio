import React, { Component } from 'react'

import '../App.css'

class About extends Component {
    render() {
        return (
            <div className='about-text-container'>
                <div className='about-text'>
                    <h1>ABOUT</h1>
                    <p>Hi, I'm <span className='about-text-highlight'>Patrick Heflin</span></p>
                    <p>I am a Web Developer from <span className='about-text-highlight'>Houston, Texas</span>. I pride myself on making fast, reliable, intuitive and responsive applications.</p>
                    <p>I specialize in building applications specific to the business needs of my clients. I have a huge passion for helping others and solving problems.</p>
                    <p> I enjoy work with desktop/mobile app creation, front-end/back-end web, database/server management, and graphic design.</p>
                </div>
            </div>
        )
    }
}


export default About