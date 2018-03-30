import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './NightStockView.css';
import ButtonView from '../ButtonView';
import NightTraderTimer from './NightTraderTimer';

class NightStockViewView extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      timeLeft: (24*60*60),
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
  }
  


  render() {
    const outerWrapper = {
      float: 'left',
      width: '30%',
      borderRadius: '3px',
      textAlign: 'center',
      marginLeft: '10px',
      marginBottom: '10px',
      marginTop: '10px',
      minWidth: '130px',
    };
    const stockHeader = {
      backgroundColor: '#f7f7f7',
      color: '#3b5998',
      fontWeight: 'bold',
      height: '40px',
      borderTopRightRadius: '3px',
      borderTopLeftRadius: '3px',
      boxShadow: '1px 1px 5px grey',
    };
    const ownerHeader = {
      width: '99.6%',
      fontSize: '15px',
      lineHeight: '35px',
      color: '#3b5998',
      height: '40px',
      borderBottom: '0px',
      borderTopRightRadius: '3px',
      borderTopLeftRadius: '3px',
      boxShadow: '1px 1px 4px grey',
    };
    const ownerLink = {
      textDecoration: 'none',
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
    const purchaseTimer = {
      width: '100%',
      height: '30px',
      backgroundColor: '#363b74',
      color: 'white',
      borderRadius: '3px',
      lineHeight: '15px',
      fontSize: '15px',
    };
    const boldText = {
      fontWeight: 'bold',
    };
    const blank = {
      height: '20px',
    }
    const chartLink = {
      
    }
    let addressLink = `https://etherscan.io/address/${this.props.address}`;

    let ownerAddress = this.props.owner ? `${this.props.owner.toString().slice(0,5)}...` : '';
    
    let buttonSwitch = !this.props.timeToContestStart ? <button onClick={this.props.click} style={purchaseButton}>Purchase</button> : <div style={purchaseTimer}>Starts in: <NightTraderTimer start={this.props.timeToContestStart}/></div>;
    let cookTimer = this.props.cookTime > 0 ? <NightTraderTimer start={this.props.cookTime}/> : '4 Hours';
    return (
      <div style={outerWrapper}> 
        <div style={stockHeader}>
          <a style={headerText} href={addressLink}> {this.props.stockName}</a>
        </div>
        <div style={ContentWrapper}>
          <p><span style={boldText}>Night Trade</span></p>
          <p><span style={boldText}>Price: </span>{this.props.price}</p>
          <span style={boldText}>Win Jackpot in:</span> {cookTimer}

          <div style={ownerHeader}>
            <a style={ownerLink} href={`https://etherscan.io/address/${this.props.owner}`}>Owner: {ownerAddress}</a>
          </div>
          {buttonSwitch}
        </div>
      
      </div>
    );
  }
}

export default withStyles(s)(NightStockViewView);
