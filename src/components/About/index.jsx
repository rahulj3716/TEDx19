import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar'


export default class AboutIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div style={{backgroundImage: "linear-gradient(to right, #1e1e26, #291e24 57%, #341f21)"}}>
                <section id="landing-page-navbar"> <Navbar /></section>
                hello
            </div>

        )
    }
}
