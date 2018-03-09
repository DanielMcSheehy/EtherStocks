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
      // CSS in this is temporary.
      width: '25%',
      borderRadius: '3px',
      textAlign: 'center',
      marginRight: '20px',
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
    };

    // Below will be dynamic, will fix soon
    return (
      <div style={outerWrapper}>
        <div style={stockHeader}>
          <p style={headerText}>{this.props.stockName}</p>
        </div>
        <div style={ContentWrapper}>
          <p>Price: {this.props.price} ETH</p>
          <p>Balance: {this.props.shares} Shares</p>
          <p>Token Supply: {this.props.tokenSupply} Shares</p>
          <ButtonView buy={this.props.buy} />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(StockView);
