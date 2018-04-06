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
      width: '103%',
      borderRadius: '3px',
      textAlign: 'center',
	    marginLeft: '1%',
      marginRight: '-15px',
      marginBottom: '10px',
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
      
      textDecoration:  'none',
    };
    const boldText = {
      fontWeight: 'bold',
    };
    const adLink = {
      margin: '0px',
      marginBottom: '-30px',
      color: 'limeGreen'
    }
    const shiftUpStyle = {
      marginTop: '-5px',
    }
    const balance = {
      fontSize: '15px',
    }
    
    let addressLink = `https://etherscan.io/address/${this.props.address}`;
    let graphLink = `http://shawntabrizi.com/ethgraph/?address=${this.props.address}`;

    let promotionalLink = this.props.stockName === "ETHERGOO.IO" ? <a style={adLink} href="https://ethergoo.io/">Play Here!</a> : '';
    let shiftUp = this.props.stockName === "ETHERGOO.IO" ? <p className='stockPrice' style={shiftUpStyle}><span style={boldText}>Price: </span> {this.props.price} ETH</p> : <p className='stockPrice'><span style={boldText}>Price: </span> {this.props.price} ETH</p>;
    return (
      <div className="stockContainer" style={outerWrapper}>
        <div style={stockHeader}>
          <a className='stockName' style={headerText} href={addressLink}>{this.props.stockName}</a>
        </div>
        <div style={ContentWrapper}>
          {promotionalLink}
          {shiftUp}
          <p className='shares' style={balance}><span style={boldText}>Balance: </span>{this.props.shares} Shares</p>
          <p style={balance}><span style={boldText}><span style={balance}>Total Shares: </span></span>{this.props.tokenSupply}</p>
          <p><span style={boldText}>Dividends:</span> {this.props.dividends} ETH</p>
          <a href={graphLink}>Chart</a>
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
