import React, { Component } from 'react'
import './css/glimpses.css'

export default class Glimpses extends Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	render () {
		return (
			<div>
				<div className="glimpses-parent">
					<h1 className="glimpses-heading">GLIMPSES</h1>
					<div className="glimpses-image"></div>
				</div>
				<div className="masonry" >
				  <img src="https://picsum.photos/400/200?grayscale" alt="random img" className="masonry-brick"/>
				  <img src="https://picsum.photos/230/182?grayscale" alt="random img" className="masonry-brick"/>
				  <img src="https://picsum.photos/310/202?grayscale" alt="random img" className="masonry-brick"/>
				  <img src="https://picsum.photos/240/152?grayscale" alt="random img" className="masonry-brick"/>
				  <img src="https://picsum.photos/340/206?grayscale" alt="random img" className="masonry-brick"/>
				  <img src="https://picsum.photos/210/263?grayscale" alt="random img" className="masonry-brick"/>
				  <img src="https://picsum.photos/250/152?grayscale" alt="random img" className="masonry-brick"/>
				  <img src="https://picsum.photos/350/200?grayscale" alt="random img" className="masonry-brick"/>
				  <img src="https://picsum.photos/280/240?grayscale" alt="random img" className="masonry-brick"/>
				  <img src="https://picsum.photos/210/200?grayscale" alt="random img" className="masonry-brick"/>
				  <img src="https://picsum.photos/255/270?grayscale" alt="random img" className="masonry-brick"/>
				  <img src="https://picsum.photos/300/280?grayscale" alt="random img" className="masonry-brick"/>
				  <img src="https://picsum.photos/250/200?grayscale" alt="random img" className="masonry-brick"/>
				</div>
			</div>
		)
	}
}