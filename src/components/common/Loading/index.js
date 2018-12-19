
import React, { Component } from 'react';

import styles from './index.less';

export default class Loading extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={styles.loading} />
      </React.Fragment>
    );
  }
}