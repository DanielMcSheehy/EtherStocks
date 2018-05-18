import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './StockView.css';
import ButtonView from '../ButtonView';

class StockView extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
  }

  render() {
    const outerWrapper = {
      float: 'left',
      width: '15%',
      borderRadius: '3px',
      textAlign: 'center',
      marginLeft: '10px',
      marginBottom: '10px',
      marginTop: '10px',
      minWidth: '130px',
    };
    const stockHeader = {
      backgroundColor: '#f7f7f7',
      overflow: 'hidden',
      fontWeight: 'bold',
      color: '#3b5998',
      height: '40px',
      borderTopRightRadius: '3px',
      borderTopLeftRadius: '3px',
      boxShadow: '1px 1px 5px grey',
    };
    const ContentWrapper = {
      border: '1px solid lightgrey',
      backgroundColor: '#ffffff',
      boxShadow: '1px 1px 1px lightgrey',
    };
    const headerText = {
      fontSize: '20px',
      lineHeight: '35px',

      textDecoration: 'none',
    };
    const boldText = {
      fontWeight: 'bold',
    };
    const adLink = {
      margin: '0px',
      marginBottom: '-30px',
      color: 'limeGreen',
    };
    const shiftUpStyle = {
      marginTop: '-5px',
    };
    const balance = {
      fontSize: '15px',
    };

    const addressLink = `https://etherscan.io/address/${this.props.address}`;
    const graphLink = `http://shawntabrizi.com/ethgraph/?address=${
      this.props.address
    }`;

    let promotionaLink = '';
    let shiftUp = (
      <p className="stockPrice">
        <span style={boldText}>Price: </span> {this.props.price} ETH
      </p>
    );
    if (
      this.props.stockName === 'EtherGoo' ||
      this.props.stockName === 'Chibi Fighters'
    ) {
      shiftUp = (
        <p className="stockPrice" style={shiftUpStyle}>
          <span style={boldText}>Price: </span> {this.props.price} ETH
        </p>
      );
      if (this.props.stockName === 'EtherGoo') {
        promotionaLink = (
          <a
            style={adLink}
            target="_blank"
            href="https://ethergoo.io/freekitty/0x53CD39080eE226a339362c44128bF272d528C1A7"
          >
            Play Here!
          </a>
        );
      } else if (this.props.stockName === 'Chibi Fighters') {
        promotionaLink = (
          <a style={adLink} target="_blank" href="https://chibigame.io/?r=155">
            Play Here!
          </a>
        );
      }
    }

    return (
      <div className="stockContainer" style={outerWrapper}>
        <div style={stockHeader}>
          <a
            className="stockName"
            style={headerText}
            href={addressLink}
            target="_blank"
          >
            {this.props.stockName}
          </a>
        </div>
        <div style={ContentWrapper}>
          {promotionaLink}
          {shiftUp}

          <p className="shares" style={balance}>
            <span style={boldText}>Balance: </span>
            {this.props.shares} Shares
          </p>
          <p style={balance}>
            <span style={boldText}>
              <span style={balance}>Total Shares: </span>
            </span>
            {this.props.tokenSupply}
          </p>
          <p className="stockDividends">
            <span style={boldText}>Dividends:</span> {this.props.dividends} ETH
          </p>
          <a href={graphLink} target="_blank">
            Chart
          </a>
          <ButtonView
            buy={this.props.buy}
            sell={this.props.sell}
            reinvest={this.props.reinvest}
            withdraw={this.props.withdraw}
            getout={this.props.getout}
          />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(StockView);
