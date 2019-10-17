import React, { Component } from 'react';
import './src/css/heading.css'
export default class HeadingIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <div className="Heading-Theme-parent">
                    <div className="Heading-Theme-text">
                    {this.props.text}
                    </div>
                <div className="heading-Image">

                </div>
                </div>
            </div>

        )
    }
}
