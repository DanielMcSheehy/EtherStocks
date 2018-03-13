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
import s from './FAQ.css';
import Link from '../Link';

class FAQ extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1 className={s.header}> 
            FAQ
          </h1>
          <p> Q. What exactly is this site?</p>
          <p> Q. Can I make money playing this game?</p>
          <p> Q. What causes "stocks" to go up or down and how are dividens paid?</p>
          <p> Q. Are there any fees or commissions?</p>
          <p> Q. What is a smart contract?</p>
          <p> Q. Wait, are you saying that if I buy some of these stoks and never sell I can keep collecting dividends forever?</p>
          <p> Q. Okay, what about if the site crashes?</p>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(FAQ);
