import React, { Component } from 'react';

// const SearchBar = () =>{
// 	return <input />;
// };
//handling events first we create event handler second we pass eventhandler
//initialis state by defining constructor

class SearchBar extends Component{
	constructor(props){
		super(props);

		this.state = {term: ''};

		this.onInputChange = this.onInputChange.bind(this);
	}

    render() {
    	return (
    		 <div className="search-bar"> 

    		  <input onChange={this.onInputChange} />
    		  Value of input: {this.state.term} 
    		 </div> 
    		);
    }

    onInputChange(event){
    	this.setState({term: event.target.value});
    	this.props.onSearchTermChange(this.state.term);
    }
}

export default SearchBar;