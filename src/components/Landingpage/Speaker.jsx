import React, { Component } from 'react';
import './src/css/speaker.css'
export default class SpeakerIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
            <div className="landing-speaker-parent">
                <div className="landing-speaker-parent-heading">
                    <div className="landing-speaker-parent-heading-line">
                    </div>
                    <div className="landing-speaker-parent-heading-content">
                        Speaker
                    </div>

                </div>

                <div className="landing-speaker-content-parent">
                    <div className="landing-speaker-content-child">
                    </div>
                    <div className="landing-speaker-content-child">
                    </div>
                    <div className="landing-speaker-content-child">
                    </div>
                
                    
                </div>
            </div>


        </div>

        )
    }
}
