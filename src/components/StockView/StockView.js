import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './StockView.css';
import Button from '../Button';

class StockView extends React.Component {
      constructor(prop) {
        super(prop);
        this.state = {
        };
        this.handleClick =  this.handleClick.bind(this);
      }

  handleClick(event) {
    event.preventDefault();

  }
  
  render() {
    var outerWrapper = { // CSS in this is temporary. 
      float: 'left',
      width: '25%',
      borderRadius: '3px',
      textAlign: 'center',
      marginRight: '20px',
    };
    var stockHeader = {
      backgroundColor: '#f7f7f7',
      color: '#3b5998',
      height: '40px',
      borderTopRightRadius: '3px',
      borderTopLeftRadius: '3px',
      boxShadow: '1px 1px 5px grey',
    };
    var ContentWrapper = {
      border: '1px solid lightgrey',
      backgroundColor: '#ffffff',
      boxShadow: '1px 1px 1px lightgrey',
    };
    var headerText = {
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
          <p>0.105576 ETH</p>
          <p>Total Shares: 4946.5533 EPY</p>
          <p>Mark Cap: 257.1738 ETH</p>
          <p>Buy cost: 0.1055678</p> 
          <Button/>
        </div>
        
      </div>
    );
  }
}

export default withStyles(s)(StockView);