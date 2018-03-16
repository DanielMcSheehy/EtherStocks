import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './DayStockView.css';
import ButtonView from '../ButtonView';
import DayTraderTimer from './DayTraderTimer';

class DayStockView extends React.Component {
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
      width: '20%',
      borderRadius: '3px',
      textAlign: 'center',
      marginRight: '-10px',
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
    const ownerHeader = {
      fontSize: '11px',
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
    const purchaseButton = {
      width: '100%',
      height: '30px',
      backgroundColor: '#363b74',
      color: 'white',
      borderRadius: '3px',
    };
    const chartLink = {
      
    }
    let addressLink = `https://etherscan.io/address/${this.props.address}`;

    return (
      <div style={outerWrapper}>
        <div style={stockHeader}>
          <a style={headerText} href={addressLink}> {this.props.stockName}</a>
        </div>
        <div style={ContentWrapper}>
          <p>Day Trade</p>
          <p>Buy price: {this.props.price}</p>
          <p>Next price: {this.props.nextPrice}</p>
          Invest in:  <DayTraderTimer start={1000} />

          <div style={ownerHeader}>
            <p>Owner: {this.props.owner}</p>
          </div>
          <button onClick={this.props.click} style={purchaseButton}>Purchase</button>
        </div>
      
      </div>
    );
  }
}

export default withStyles(s)(DayStockView);
