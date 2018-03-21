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
          <p className={s.boldText}> Q. What exactly is this site?</p>
          <p> A. This is a game; the rules are simple, try and make money buying and selling “stocks”. You can do this in a couple ways, you can simply buy low, sell high, or you can hodl and collect dividends.</p>
          <p className={s.boldText}> Q. Can I make money playing this game?</p>
          <p> A. Sure you can, but you can lose it too, look at this as strictly entertainment, whatever you are willing to spend on any other game is probably a good amount to spend on this game.</p>
          <p className={s.boldText}> Q. What causes "stocks" to go up or down and how are dividens paid?</p>
          <p> A. When someone buys or sells shares of any stock 10% of the buy/sell price is given as dividends to all owners of that stock based on how many shares they own. The price of shares will go up by apprx .25% after purchases, and decrease by apprx .25% after each share is sold. That’s it, there is no other way to change, or manipulate prices outside of buying and selling. </p>
          <p className={s.boldText}> Q. Are there any fees or commissions?</p>
          <p> A.  No, there are no commissions or rake of any kind.  Each “Stock” is really its own smart contract, and they are all identical. The only fees would be the gas paid to send money through Metamask, you can read about this <a href="https://ethgasstation.info/" target="_blank">here</a>.</p>
          <p className={s.boldText}> Q. What is a smart contract?</p>
          <p> A. A smart contract, also known as a cryptocontract, is a computer program that directly controls the transfer of digital currencies or assets between parties under certain conditions. These contracts are stored on blockchain technology, a decentralized ledger that also underpins Ethereum and other cryptocurrencies.  Simply put a smart contract self-executes the “if-this-then-that” conditions coded onto it. These contracts are connected to the Ethereum blockchain, so as long as Ethereum exists these contracts exist.</p>
          <p className={s.boldText}> Q. Wait, are you saying that if I buy some of one of these stocks and never sell I can keep collecting dividends forever?</p>
          <p> A. Well forever is a long time, but again as long as Ethereum exists these contracts do too.</p>
          <p className={s.boldText}> Q. Here’s to going Viral!</p>
          <p> A. Indeed.</p>
          <p className={s.boldText}> Q. How do the "Day Trader" stocks work?</p>
          <p> A. Day trader stocks are a faster paced game of "Hot Potato"  pass the potato back and forth for some quick gains, but be weary as if you are the last one to buy the "Day Trader" stock and nobody else buys it within the next 24 hrs, you lose and the balances reset.</p>
          <p className={s.boldText}> Q. Are there fees with the "Day Traders"?</p>
          <p> A. Yes, but the great thing is that the 10% Dev fees will go into pumping up the stocks increasing share value, and dividends!</p>
          <p className={s.boldText}> Q. Okay, what about if the site crashes?</p>
          <p> A. The website has nothing to do with these individual contracts other than displaying and linking to them. Again, these contracts live on the Ethereum blockchain. However, in the event the website is down and you want to withdraw all your funds you can do so by going navigating through MetaMask to “view account on etherscan” you can then copy the addresses to the “stocks” smart contracts that you had invested in and send a transaction through metamask to those addresses for 0 Eth with a 150k gas limit and "0xb1e35242" under ‘additional data’ for your own personal exit scheme. This is the getMeOutOfHere() function on the contract and will cash you out of all tokens and dividends. (Soon you will be able to copy a list of all portfolio addresses right from your portfolio page) This information and the direct links to all contracts on this site are also listed on our discord server.</p>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(FAQ);
