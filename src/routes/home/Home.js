/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import ContractContainer from '../../components/ContractContainer';
import DayTraderContainer from '../../components/DayTraderContainer';
import Instructions from '../../components/Instructions';
import FAQ from '../../components/FAQ';
import DonateContainer from '../../components/DonateContainer';
import s from './Home.css';

class Home extends React.Component {
  static propTypes = {
    news: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        content: PropTypes.string,
      }),
    ).isRequired,
  };

  render() {

    
    return (
      <div className={s.root}>
        <div >
          
          <ContractContainer />
          
          <div style={{ clear: 'left', minWidth: '500px' }}>
            <Instructions />
            <FAQ />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
