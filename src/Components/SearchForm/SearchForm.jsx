import React from 'react';
import * as styles from './SearchForm.scss'

export class SearchForm extends React.Component {
  searchTextUpdate(event) {
    this.props.updateHandler(event.target.value)
  }

  render() {
    return <form className={styles.searchForm}>
      <div className="pt-input-group .pt-large">
        <span className="pt-icon pt-icon-search"> </span>
        <input type="search"
           className="searchForm__input pt-input"
           placeholder="Artists or music band name"
           onChange={this.searchTextUpdate.bind(this)} />
      </div>
    </form>
  }
}