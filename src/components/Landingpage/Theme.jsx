import React, { Component } from 'react';
import './src/css/theme.css'
import Heading from './Heading';
export default class ThemeIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
 
    render() {
        return (
            <div>
                <div className="landing-Theme-parent">

                    <div className="landing-Theme-slider-parent">
                        <div className="landing-Theme-slider-parent-pic">
                            <Heading text="THEME"/>
                        </div>
                        <div className="landing-Theme-slider-child">
                        Since the beginning of time, humans have been surrounded by constraints and challenged with the task to overcome them. A huge part of our evolution revolves around these constraints. Although culture and tradition have provided us with a basis for living standards, they have held us back in many ways. Going against the tradition is not to be viewed as a step in the wrong direction, but rather as an attempt at a new, unexplored adventure.
                        <br/><br/>
                        This year, TEDxIITRoorkee is focused on encouraging people to go against the flow and try out new ventures, and also guide them along their journey by conducting this year’s talks on the theme "Beyond the Barriers". Our aim is to bring together a diverse group of speakers who can share their thoughts, insights, and experiences and enlighten the audience by their presence.

                        </div>
                        
                    </div>
                </div>


            </div>

        )
    }
}
