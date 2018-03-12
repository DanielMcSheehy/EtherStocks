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
import Reddit from './reddit.png';

class Navigation extends React.Component {
  render() {
    var roundLogo = {
      borderRadius: '5px',
      float: 'right',
    };
    return (
      <div className={s.root} role="navigation">
      <div className={s.logo}>
        <Link className={s.link} to="https://metamask.io/"> 
              <img
                style={roundLogo}
                height="50px"
                src={Reddit}
                alt="React"
              />
          </Link>
          <Link className={s.link} to="https://metamask.io/">
              <img 
                src={MetaMaskLogo}
                alt="React"
                style={roundLogo}
              />
          </Link>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Navigation);
