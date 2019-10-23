import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar'
import '../Team/src/css/index.css'
import Footer from '../Landingpage/Footer';
import Talks from './Talks'
export default class TeamIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
            <div style={{backgroundImage: "linear-gradient(to right, #1e1e26, #291e24 57%, #341f21)"}}>
                <section id="landing-page-navbar"> <Navbar /></section>
                    
                    <Talks/>

            </div>
            <Footer/>
            </div>

        )
    }
}
