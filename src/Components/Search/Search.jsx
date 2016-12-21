import * as React from 'react';
import SearchForm from './../SearchForm';
import SearchResults from './../SearchResults';
import * as styles from './Search.scss'

export class Search extends React.Component {
  constructor(){
    super();
    this.propsTypes = {
      updateHandler: React.PropTypes.func.isRequired,
      artists: React.PropTypes.array.isRequired
    }
  }
  
  render() {
    return <div className={styles.search}>
      <SearchForm updateHandler={this.props.searchFormUpdateHandler} />
      <SearchResults results={this.props.artists} />
    </div>
  }
}