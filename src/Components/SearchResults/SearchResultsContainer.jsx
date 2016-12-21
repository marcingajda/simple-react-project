import React from 'react';
import { SearchResults } from './SearchResults';
import * as styles from './SearchResults.scss'

export class SearchResultsContainer extends React.Component {
  static styles() {
    return styles.searchResults + "pt-card pt-elevation-2";
  }

  static findImageURL(images, sizeName){
    return _.find(images, {size: sizeName})['#text'];
  }

  static filterFields(artist){
    return _.pick(artist, ['mbid', 'name', 'listeners', 'image'])
  }

  static filterArtistImages(artist){
    artist.image = SearchResultsContainer.findImageURL(artist.image, 'medium');
    return artist;
  }

  artistsData() {
    return _(this.props.results)
      .map(SearchResultsContainer.filterFields)
      .map(SearchResultsContainer.filterArtistImages)
      .value();
  }

  render() {
    console.log(this.artistsData());
    return <SearchResults results={this.artistsData()} />
  }
}