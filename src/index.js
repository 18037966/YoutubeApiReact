//Create a new component. Produce html
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchbar';
import VideoList from './components/video_list';
import VideoDetail from './components/videodetail';
const API_KEY = 'AIzaSyBGz3a5F8jhXibbCpaj_w9zcqqsYqUcCnk';

//using arrow functions donot need to write bind
class App extends Component{
	constructor(props){
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		};

		//this.YTSearch = this.YTSearch.bind(this);

		this.videoSearch('surfboards');

	}

	 videoSearch(term){
	 	YTSearch({key: API_KEY, term: term}, (data) => {
		     this.setState({ 
		     	videos: data,
		     	selectedVideo: data[0]

		     });
		});
	 }

	  render(){
			return (
				<div>
			       <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
			       <VideoDetail video={this.state.selectedVideo}/>
			       <VideoList 
			          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
			       	  videos={this.state.videos}
			       	/>
				</div>
			);
	}

}

ReactDOM.render(<App />, document.querySelector('.container'));