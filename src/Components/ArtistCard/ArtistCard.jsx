import React from 'react';
import { Link } from 'react-router'
import * as styles from './ArtistCard.scss'

export class ArtistCard extends React.Component {
  styles() {
    return styles.artistCard + " pt-card pt-interactive pt-elevation-1";
  }

  render() {
    let artist = this.props.artist;
    return <Link to={`/artist/${artist.mbid}`} className={this.styles()}>
      <img className="artistCard__image" src={artist.image} />
      <h2>{artist.name}</h2>
      <p className="pt-running-text">
        Numbers of listeners on Last.fm: {artist.listeners}
      </p>
    </Link>
  }
}