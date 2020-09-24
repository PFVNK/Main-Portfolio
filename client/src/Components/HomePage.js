import React, { Component } from 'react'

import '../App.css'

import shortglitch from '../shortglitch1.mp4'
import brick from '../brick.jpg'
import patrick from '../patrickk.JPEG'

class HomePage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            videoURL: shortglitch
        }
    }

    render() {
        return (
            <>
                <div className='home-main'>
                    <main>
                        <div className='home-center-text'>
                            <h1>I make websites</h1>
                        </div>
                    </main>


                    <div className='home-image'>
                        <img src={patrick} alt="" />
                    </div>
                </div>


                {/* 
                <div className='home-background-image'>
                    <img src={brick} alt="patrick heflin" />
                </div> */}

                {/* <video className="home-background-video" loop autoPlay muted>
                    <source src={this.state.videoURL} type="video/mp4" />
                    <source src={this.state.videoURL} type="video/ogg" />
                    Your browser does not support the video tag.
                </video> */}
            </>

        )
    }
};

export default HomePage