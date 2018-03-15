import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './DonateContainer.css';
import ConfirmTransaction from '../ConfirmTransaction';




var Web3 = require('web3');

class DonateContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          togglePaymentIntput: false,
        };
        this.handleClick =  this.handleClick.bind(this);
        this.sendEth = this.sendEth.bind(this);
      }

    componentDidMount () { // Replace current shit with new contracts/event listeners
        if (typeof Web3 != 'undefined') {
          console.log("Using web3 detected from external source like Metamask");
          web3 = new Web3(window.web3.currentProvider); // This is where it listens to metamask
        } else {
          console.log('use metamask!');
          this.web3 = new Web3(new web3.providers.HttpProvider("http://localhost:8545")); // Not to be used.
        }
    }
    
    handleClick(event) {
      //event.preventDefault();
      this.setState({ togglePaymentIntput: !this.state.togglePaymentIntput });
    }
    
  sendEth(_eth_value) {
    let _wei_value = web3.toWei(_eth_value, "ether");
    let senderAddress = web3.eth.accounts[0];
    let devAddress = '0x05384A688f405dB8b5b687FD3Abf1ED62dBa0327';
    //web3.eth.sendTransaction({from: senderAddress, to:devAddress, value: _eth_value});

    web3.eth.sendTransaction({from: senderAddress, to: devAddress, value: _wei_value}, function(err, transactionHash) {
      if (err) {
        console.log('error here:', err);
      }
      else {
        console.log('result', transactionHash); 
       }
    });
  }

  render() {
    
    let toggleInput = this.state.togglePaymentIntput ? <div className={s.confirm}><ConfirmTransaction toggle={this.handleClick} buy={this.sendEth} color="#009246" buttonText="Confirm" /></div>  : "";
    return ( // This is where we put stocks. Will be dynamic very soon.
      <div >
         <p className={s.donate} onClick={this.handleClick}>Donate</p>
         {toggleInput}
        
      </div>
    );
  }
}

export default withStyles(s)(DonateContainer);