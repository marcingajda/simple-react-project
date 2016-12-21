import React from 'react';
// import { Artist } from './Artist';
import * as _ from 'lodash'
import { getArtistByMbId } from './../../Services/LastfmService';

export class ArtistContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      artist: false
    }
  }

  componentWillMount() {
    getArtistByMbId(this.props.params.mbid)
      .then((data) => this.setState({artist: data}));
  }

  artist(artist) {
    return <div>
      <h2>{artist.name}</h2>
      <p className="pt-running-text" dangerouslySetInnerHTML={{__html: artist.bio.content}}></p>
    </div>
  }

  render() {
    let artist = this.state.artist;
    if(artist) {
      return this.artist(artist);
    } else {
      return <span>loading</span>
    }
  }
}