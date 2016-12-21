import React from 'react';
import { Search } from './Search';
import * as _ from 'lodash'
import { searchArtists } from './../../Services/LastfmService'

export class SearchContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      artists: []
    }
  }

  componentWillMount() {
    this.updateHandler = _.debounce(this.updateHandler, 500);
  }

  updateHandler(text) {
    searchArtists(text)
      .then((data) => this.setState({ artists: data }));
  }

  render() {
    console.log(this.state)
    return <Search artists={this.state.artists} searchFormUpdateHandler={this.updateHandler.bind(this)} />
  }
}