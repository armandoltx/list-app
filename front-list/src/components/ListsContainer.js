import React, { Component } from 'react';

import axios from 'axios';

class ListsContainer extends Component {
  state = {
    lists: []
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/lists.json')
    .then(response => {
      console.log(response)
      // this.serState({
      //   lists: response.data
      // })
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="Lists-container">
        Lists
      </div>
    );
  }

}

export default ListsContainer;