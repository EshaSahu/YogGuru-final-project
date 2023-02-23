import React from "react";

import { Component } from 'react';
import VideoPlayer from 'react-video-js-player';

// import { Player } from 'video-react';
// import "./video-react.css";




class VideoApp extends Component {
	player = {}
	state = {
		video: {
			src: "./videos/vrik.mp4",
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

















// function Heart1(){
//     return(



//       );
//     }

    //     <Player fluid="false" width={2} height={2}
    //   playsInline
    // //   poster="/assets/poster.png"
    //   src="videos/tadasana.mp4"
    // />
 


// export default Heart1;

