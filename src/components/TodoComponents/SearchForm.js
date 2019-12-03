import React from 'react';

class SearchForm extends React.Component{
    constructor(){
        super();
        this.state = {
            searchText: ''
        }
    }

    handleUpdate = e => {
        this.setState({
            searchText: e.target.value
        })
        this.props.setSearchText(e.target.value);
    }

    render(){
        return(
            <input type='search' placeholder='Search' onChange={this.handleUpdate} value={this.state.searchText} className='searchInput'/>
        )
    }
}

export default SearchForm;