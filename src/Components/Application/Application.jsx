import React from 'react';
import styles from './Application.scss'

class Application extends React.Component {
  static styles() {
    return styles.application + " application pt-card pt-elevation-2";
  }

  render() {
    return (<div className={Application.styles()}>
      <h1>Last.fm database search</h1>
      <hr />
      {this.props.children}
    </div>)
  }
}

export default Application;