import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'

class Footer extends Component {

    render() {
        const activeClass = this.props.location.pathname === '/' ? 'footer-icons' : 'sidebar-icons'
        console.log(activeClass)
        return (
            <div className={activeClass}>
                <a href='https://github.com/PFVNK'><FontAwesomeIcon icon={faGithub} className='footer-github-icon' /></a>
                <a href='https://twitter.com/PFVNK'><FontAwesomeIcon icon={faTwitter} className='footer-twitter-icon' /></a>
                <a href='https://www.facebook.com/patrick.heflin.1'><FontAwesomeIcon icon={faFacebook} className='footer-facebook-icon' /></a>
            </div>
        )
    }
}


export default Footer