import React from 'react';
import './searchBar.css';

class SearchBar extends React.Component{
	
	state={term:''};
	
	onFormSubmit=(event)=>{
		event.preventDefault();
		this.props.onSubmit1(this.state.term);
	}
	
	render(){
		return(
			<div className="ui segment search-bar">
				<form onSubmit={this.onFormSubmit} className="ui form">
				<div className="field">
				<label class="form-label">Image Search</label>
					<input class="form-search-bar" type="text" 
							value={this.state.term} onChange={e=>this.setState({term: e.target.value})}/>
				</div>	
				</form>
			</div>
		)
		
	}
}
export default SearchBar;
