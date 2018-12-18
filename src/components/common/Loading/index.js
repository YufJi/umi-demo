
import React, { Component } from 'react';
import { Icon } from 'antd-mobile';

import styles from './index.less';

export default class Loading extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={styles.Loading}>
          <Icon type="loading" />
        </div>
      </React.Fragment>
    );
  }
}