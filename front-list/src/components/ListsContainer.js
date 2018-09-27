import React, { Component } from 'react';
import axios from 'axios';

import List from './List';


class ListsContainer extends Component {
  state = {
    lists: []
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/lists.json')
    .then(response => {
      console.log(response)
      this.setState({
        lists: response.data
      })
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="Lists">
        {this.state.lists.map((list) => {
          return (
            <List list={list} key={list.id} />
          )
        })}
        Lists
      </div>
    );
  }

}

export default ListsContainer;