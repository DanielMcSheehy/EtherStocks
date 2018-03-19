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
      width: '100%',
      borderRadius: '3px',
      textAlign: 'center',
      marginRight: '-20px',
      marginBottom: '10px',
    };
    const stockHeader = {
      backgroundColor: '#f7f7f7',
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
      textDecoration:  'none',
    };
    const balance = {
      fontSize: '15px',
    }
    let addressLink = `https://etherscan.io/address/${this.props.address}`;
    let graphLink = `http://shawntabrizi.com/ethgraph/?address=${this.props.address}`;
    return (
      <div style={outerWrapper}>
        <div style={stockHeader}>
          <a style={headerText} href={addressLink}>{this.props.stockName}</a>
        </div>
        <div style={ContentWrapper}>
          <p>Price: {this.props.price} ETH</p>
          <p style={balance}>Balance: {this.props.shares} Shares</p>
          <p>Token Supply: {this.props.tokenSupply} Shares</p>
          <p>Dividends {this.props.dividends} ETH</p>
          <a href={graphLink}  >Chart</a>
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
