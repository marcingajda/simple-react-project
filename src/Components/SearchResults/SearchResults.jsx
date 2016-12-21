import React from 'react';
import * as styles from './SearchResults'
import ArtistCard from './../ArtistCard'

export class SearchResults extends React.Component {
  artistCard(artist) {
    return <ArtistCard artist={artist} key={artist.name + artist.mbid} />
  }

  render() {
    return <div className={styles.searchResults}>
      { _.map(this.props.results, this.artistCard) }
    </div>
  }
}