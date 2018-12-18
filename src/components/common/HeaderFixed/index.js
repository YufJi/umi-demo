import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { noop } from '@/utils/tools.js';

import styles from './index.less';

const limitHeight = 40;
const startHeight = 20;

export default class HeaderFixed extends Component {
  static defaultProps = {
    tapBack: noop,
    title: '',
    refresh: false,
    isIphone: false,
  };

  static propTypes = {
    tapBack: PropTypes.func,
    title: PropTypes.string,
    refresh: PropTypes.bool,
    isIphone: PropTypes.bool,
  };
  constructor(props) {
    super(props);
    this.state = {
      opacity: 0,
      isInWeChat: false,
    };
  }
  componentDidMount() {
    this.subscribeScrollTop();
  }
  subscribeScrollTop = () => {
    const headerHeight = this.headerEle.offsetHeight; // header height
    const screenHeight = window.screen.height;
    const doms = [document.getElementById('root'), document.getElementById('scroll-view')];
    doms.forEach((dom) => {
      if (!dom) return;
      dom.onscroll = () => {
        const bodyScrollHeight = dom.scrollHeight;
        if (bodyScrollHeight - screenHeight <= headerHeight) {
          return;
        }
        const top = dom.scrollTop || document.documentElement.scrollTop || document.body.scrollTop;
        const realTop = top > startHeight ? top - startHeight : 0;
        if (realTop >= limitHeight) {
          this.setState({
            opacity: 1,
          });
        } else {
          this.setState({
            opacity: realTop/limitHeight,
          });
        }
      };
    });
  }
  render() {
    const { tapBack, title, renderOption, isIphone } = this.props;
    const { opacity, isInWeChat } = this.state;
    return (
      <div>
        {!isInWeChat && (
          <div
            key="dom"
            ref={ref => this.headerEle = ref}
            className={styles['fixed-header']}
            style={{
              background: `rgba(248,248,248, ${opacity})`,
              boxShadow: `${opacity === 1 ? '0 0.15rem 0.15rem rgba(0, 0, 0, 0.1)' : 'none'}`,
            }}
          >
            <div
              className={opacity === 0 ? `${styles.back} ${styles.bg}` : `${styles.back}` }
              onClick={tapBack}
            >
              <i
                className={`${styles.icon} iconfont`}
                  style={{
                  background: `rgba(0, 0, 0, ${0.45 - opacity})`,
                }}
              >
                &#xe60c;
              </i>
            </div>
            <div
              key="title"
              className={styles.title}
              style={{
              opacity,
              color: `rgba(3, 3, 3, ${opacity})`,
            }}
            >
              {title}
            </div>
            <div key="btn" className={styles['option-btn']} />
            {renderOption && (
              <div className={styles.refresh}>
                {renderOption()}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}
