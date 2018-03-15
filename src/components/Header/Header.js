/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';
import logoUrl from './logo-small.png';
import logoUrl2x from './logo-small@2x.png';
//import EthLogo from './EthStockLogo.png';
import EthLogo from './badge-critical-charts.png';
import GitLogo from './gitlogo.svg';
import Steemit from './steemit.png';



class Header extends React.Component {
  render() {
    var outerWrapper = {
      marginLeft: '260px',
    };
    var roundLogo = {
      borderRadius: '5px',
      marginRight: '20px',
      clear: 'left',
      left: '0',
    };
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Navigation />
          <a className={s.brand} href="https://github.com/DanielMcSheehy/EtherStocks">
            <img
              src={GitLogo}
              style={roundLogo}
              height="45px"
              alt="React"
            />
          </a>
          <a className={s.brand} href="https://steemit.com/@brittuf">
            <img
              src={Steemit}
              style={roundLogo}
              height="45px"
              alt="React"
            />
          </a>
          <div className={s.banner}>
          <img
          style={outerWrapper}
              src={EthLogo}
              width="100px"
              alt="React"
            />
            <h1 className={s.bannerTitle}>EtherStocks</h1>
            <p className={s.bannerDesc}>
              We are the worldwide stock exchange. 
              A market where anyone from anywhere can invest in any business 
              worldwide using cryptocurrencies (BTC,ETH,NXT, and others)
              or fiat money.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);
