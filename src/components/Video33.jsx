import React from "react";

import { Component } from 'react';
import VideoPlayer from 'react-video-js-player';





class VideoApp extends Component {
	player = {}
	state = {
		video: {
			src: "./videos/corpse.mp4",
			poster: "girl1.png"
		}
	}

	onPlayerReady(player){
		this.player = player;
	}

	render() {
		return (
			<div>
				<VideoPlayer
					controls={true}
					src={this.state.video.src}
					poster={this.state.video.poster}
                    width="710"
					height="420"
                    
					onReady={this.onPlayerReady.bind(this)}
				/>
			</div>
		);
	}
}

export default VideoApp;



















