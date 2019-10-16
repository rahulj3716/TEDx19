import React, { Component } from 'react';
import './src/css/about.css'
export default class AboutusIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <div className="landing-about-parent">
                    <div className="landing-about-img-parent">
                        <div className="landing-about-img-parent-content">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                        </div>
                    </div>

                    <div className="landing-about-img-parent2">
                        <div className="landing-about-img-parent2-child">
                        </div>
                        <div className="landing-about-img-parent2-child">
                        </div>
                        <div className="landing-about-img-parent2-child">
                        </div>
                        <div className="landing-about-img-parent2-child">
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
