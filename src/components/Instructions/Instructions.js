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
import s from './Instructions.css';
import Link from '../Link';

class Instructions extends React.Component {
  render() {
    return (
      <div className={s.root}>
       <div id="test"></div>
        <div className={s.container}>
          <h1 className={s.header}>
            How to Play
          </h1>
          <p>
            In order to use this website, your browser needs to have the browser extension MetaMask installed. 
            After that, you will see numerous stocks available for purchase in the table below.
          </p>
          <p className={s.boldText}>
            DayTrader:
          </p>
          <p>
          This is a high risk, high reward game of hot potato, buy a meaningless asset and hope someone else buys it from you for 1.5, or 2x the price.  With every purchase the clock resets to 24hrs, but when the clock runs out the fairy tale ends, and the price goes back to 0.005. Not for the faint of heart!  (fees will be used to promote and pump the real, fake stocks).
          </p>
          <p className={s.boldText}>
            NightTrader:
          </p>
          <p>
          Like the day trader except a percentage of every purchase goes into a jackpot, and with every buy the timer resets to 8 hours.  The last one to buy when clock runs out wins 70% of jackpot, the rest will be used to start a new jackpot, and the devs will put their share into pumping the stock associated with the winning bid (usually in about 24hrs, so get in before them and make some dividends!).
          </p>
          <p className={s.boldText}>
            EtherStocks:
          </p>
          <p>
            There are multiple actions that you can do with each stock:
          </p>
          <div>
            <div className={s.numberBullet}>1</div>
            <p className={s.innerText}><span className={s.boldText}>Buy</span> - Purchase shares at the current buy rate.</p>
          </div>
          <div>
            <div className={s.numberBullet}>2</div>
            <p className={s.innerText}><span className={s.boldText}>Sell</span> - Sell your shares at the current sell rate - ETH will be deposited into your dividens.</p>
          </div>
          <div>
            <div className={s.numberBullet}>3</div>
            <p className={s.innerText}><span className={s.boldText}>Withdraw</span> - Withdraw your dividends into your Ethereum network.</p>
          </div>
          <div>
            <div className={s.numberBullet}>4</div>
            <p className={s.innerText}><span className={s.boldText}>Reinvest</span> - Purchase shares using ETH using your dividends for the current stock.</p>
          </div>
          <div>
            <div className={s.numberBullet}>5</div>
            <p className={s.innerText}><span className={s.boldText}>Get out</span> - Sell your shares and withdraw dividends immediately.</p>
          </div>

          <div>
            <p> Each time a share is purchased, the rate for subsequent purchaes will be increased by 0.25%.</p>
            <p> Additionally, each time a share is bought or sold, 10% from the transaction will be distrubuted between all shareholders as a dividend.</p>
            <p className={s.boldText}>Therefore, you can earn money in multiple ways:</p>
          </div>

          <div>
            <div className={s.numberBullet}>1</div>
            <p className={s.innerText}><span className={s.boldText}>Buy low, sell high</span> - classic.</p>
          </div>

          <div>
            <div className={s.numberBullet}>2</div>
            <p className={s.innerText}><span className={s.boldText}>Buy and hold</span> - get money from dividends when price fluctuates.</p>
          </div>
          
          <div className={s.disclaimer}>
            <p className={s.innerText}><span className={s.boldText}>Disclaimer</span> - This game is purely fantasy, and only to be used for entertaiment purposes.</p>
          </div>

          <p className={s.italicText}>Good luck.</p>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Instructions);
