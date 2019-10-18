import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar'
import './src/css/index.css'
import '../../index.css'
import Member from './Member'

export default class TeamIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div style={{backgroundImage: "linear-gradient(to right, #1e1e26, #291e24 57%, #341f21)"}}>
                <section id="landing-page-navbar"> <Navbar /></section>
                <div className="landing-page">
                    <div className="landing-page-parent">
                        <h1 className="landing-page-heading">TEAM</h1>
                        <div className="landing-page-image"></div>
                    </div>
                    <ul className="member-list">
                        <Member className="member-list-child"/>
                        <Member className="member-list-child"/>
                        <Member className="member-list-child"/>
                        <Member className="member-list-child"/>
                        <Member className="member-list-child"/>
                        <Member className="member-list-child"/>
                    </ul>
                </div>
            </div>

        )
    }
}
