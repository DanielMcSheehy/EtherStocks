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
import Steemit from './steemit.png';


class Header extends React.Component {
  render() {
    var outerWrapper = {
      marginLeft: '250px',
    };
    var roundLogo = {
      borderRadius: '5px',
    };
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Navigation />
          <Link className={s.brand} to="/">
            <img
              src={Steemit}
              style={roundLogo}
              alt="React"
            />
          </Link>
          <div className={s.banner}>
          <img
          style={outerWrapper}
              src={EthLogo}
              width="100px"
              alt="React"
            />
            <h1 className={s.bannerTitle}>EtherStocks</h1>
            <p className={s.bannerDesc}>Good Luck</p>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);
