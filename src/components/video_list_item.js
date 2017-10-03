import React from 'react';

//inorder to get access to video from video_list into VideoListItem we have to say props
const VideoListItem = (/*props*/ {video, onVideoSelect}) => {
	//const video = props.video;
	//console.log(video);
	const imageUrl = video.snippet.thumbnails.default.url;

	return (
		  <li onClick={() => onVideoSelect(video)} className="list-group-item" >
		     <div className="video-list media">
		     	<div className="media-left">
		     		<img className="media-object" src={imageUrl}/>
		     	</div>

		     	<div className="media-body">
		     	  <div className="media-heading">
		     	  	{video.snippet.title}
		     	  </div>
		     	</div>
		     </div>
		  </li>

		);
};

export default VideoListItem;