/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.css';
import Link from '../Link';
import MetaMaskLogo from './MetaMask.png';
import MetaMaskSVG from './metamasksvg.svg';
import Reddit from './Reddit_icon.svg';

class Navigation extends React.Component {
  render() {
    var roundLogo = {
      borderRadius: '5px',
      float: 'right',
      marginTop: '-15px',
    };
    return (
      <div className={s.root} role="navigation">
      <div className={s.logo}>
        <a className={s.link} href="https://www.reddit.com/r/EtherStocks/"> 
              <img
                style={roundLogo}
                height="50px"
                src={Reddit}
                alt="React"
              />
          </a>
          <a className={s.link} href="https://metamask.io/">
              <img 
                src={MetaMaskSVG}
                height="50px"
                alt="React"
                style={roundLogo}
              />
          </a>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Navigation);
