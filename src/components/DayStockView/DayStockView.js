import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './DayStockView.css';
import ButtonView from '../ButtonView';
import DayTraderTimer from './DayTraderTimer';

class DayStockView extends React.Component {
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
  
  

  componentDidMount() {
    //setTimeout(function(){ 
      let timeLeft = ((Date.now())/1000 - (this.props.purchasedAt+1200)).toFixed(0);
      //let timeLeft = (this.props.purchasedAt+1200) - (Date.now())/1000;
      
      this.setState({ timeLeft});
      console.log('time after time:', this.state.timeLeft);

    //}.bind(this), 1000);
  }
  


  render() {
    const outerWrapper = {
      float: 'left',
      width: '20%',
      borderRadius: '3px',
      textAlign: 'center',
      marginRight: '10px',
      marginBottom: '10px',
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
    const boldText = {
      fontWeight: 'bold',
    };
    const chartLink = {
      
    }
    let addressLink = `https://etherscan.io/address/${this.props.address}`;

    let ownerAddress = this.props.owner ? `${this.props.owner.toString().slice(0,5)}...` : '';
    //let timeLeft = this.state.timeLeft ? this.state.timeLeft : 10;

    //let timeLeft = this.props.purchasedAt ? this.props.purchasedAt : 10;

    return (
      <div style={outerWrapper}>
        <div style={stockHeader}>
          <a style={headerText} href={addressLink}> {this.props.stockName}</a>
        </div>
        <div style={ContentWrapper}>
          <p><span style={boldText}>Day Trade</span></p>
          <p><span style={boldText}>Buy price: </span>{this.props.price}</p>
          <p><span style={boldText}>Next price: </span>{this.props.nextPrice}</p>
          <span style={boldText}>Resets in:  </span><DayTraderTimer start={this.state.timeLeft}/>

          <div style={ownerHeader}>
            <a style={ownerLink} href={`https://etherscan.io/address/${this.props.owner}`}>Owner: {ownerAddress}</a>
          </div>
          <button onClick={this.props.click} style={purchaseButton}>Purchase</button>
        </div>
      
      </div>
    );
  }
}

export default withStyles(s)(DayStockView);
