import React, { Component } from 'react';
import './src/css/theme.css'
import { Carousel } from 'antd';
export default class ThemeIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <div className="landing-Theme-parent">
                    <div className="landing-Theme-parent-heading">
                        <div className="landing-Theme-parent-heading-line">
                        </div>
                        <div className="landing-Theme-parent-heading-content">
                            Theme
                        </div>

                    </div>

                    <div className="landing-Theme-slider-parent">
                        <div className="landing-Theme-slider-parent-pic">
                        </div>
                        <div className="landing-Theme-slider-child">
                        <Carousel effect="fade" className="Theme-slider">
                            <div><h3>1</h3></div>
                            <div><h3>2</h3></div>
                            <div><h3>3</h3></div>
                            <div><h3>4</h3></div>
                        </Carousel>,
                        </div>
                        
                    </div>
                </div>


            </div>

        )
    }
}
