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
            searchText = e.target.value
        })
    }

    render(){
        return(
            <input type='search' placeholder='Search' onChange={handeUpdate} value={this.state.searchText}/>
        )
    }
}