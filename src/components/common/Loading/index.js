
import React, { Component } from 'react';

import styles from './index.less';

export default class Loading extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={styles.wrap}>
          <div className={styles.loading}>
            <div className={styles.loading__square} />
            <div className={styles.loading__square} />
            <div className={styles.loading__square} />
            <div className={styles.loading__square} />
            <div className={styles.loading__square} />
            <div className={styles.loading__square} />
            <div className={styles.loading__square} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}