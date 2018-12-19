import React, { Fragment, PureComponent } from 'react';
import { Carousel } from 'antd-mobile';

import Header from '@/components/common/HeaderFixed';
import Loading from '@/components/common/Loading';

import styles from './index.less';

export default class Index extends PureComponent {
  render() {
    return (
      <Fragment>
        <Header title="超级班车" />
        <div id="scroll-view" className={`${styles.wrap} w100 flex-one ova`}>
          <div className={styles.banner}>
            <Carousel
              autoplay={false}
              infinite
              beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
              afterChange={index => console.log('slide to', index)}
            >
              {['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'].map(val => (
                <a
                  key={val}
                  href="http://www.alipay.com"
                  style={{ display: 'inline-block', width: '100%', height: 200 }}
                >
                  <img
                    src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top' }}
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 'auto' });
                    }}
                  />
                </a>
              ))}
            </Carousel>
          </div>
          <div className="w100" style={{height: '1000px', background: '#f10'}} />
        </div>
      </Fragment>
    );
  }
}