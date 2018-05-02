import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ContractViewer.css';
import GameView from '../GameView';
import Abi from './contractAbi.json';
import StockView from '../StockView';

var Web3 = require('web3');

class ContractViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ContractInstance: {},
      price: 0,
      contractBalance: 0,
      tokenSupply: 0,
      dividends: 0,
    };
    this.getBuyPrice = this.getBuyPrice.bind(this);
    this.buy = this.buy.bind(this);
    this.sell = this.sell.bind(this);
    this.reinvest = this.reinvest.bind(this);
    this.withdraw = this.withdraw.bind(this);
    this.getout = this.getout.bind(this);
  }

  componentDidMount() {
    try {
      if (typeof Web3 !== 'undefined') {
        // console.log("Using web3 detected from external source like Metamask");
        web3 = new Web3(window.web3.currentProvider); // This is where it listens to metamask
      } else {
        // console.log('use metamask!');
        this.web3 = new Web3(
          new web3.providers.HttpProvider('http://localhost:8545'),
        ); // Not to be used.
      }

      const MyContract = web3.eth.contract(Abi);

      var ContractInstance = MyContract.at(this.props.contractAddress);

      this.setState({ ownerAccount: web3.eth.accounts[0] });

      this.getBuyPrice(ContractInstance);
    } catch (error) {
      console.log('Error with MetaMask: ', error);
      let previewPriceValue = (Math.random() * (0.013 - 0.007) + 0.007).toFixed(
        5,
      );
      this.setState({ price: previewPriceValue });
    }
  }

  getBuyPrice(ContractInstance) {
    ContractInstance.buyPrice(
      { from: this.state.ownerAccount },
      (error, result) => {
      if (error) {
        console.error(error);
      }
      else {

        let _weiprice = result.toNumber();
                    //let _ethConverted = (_weiprice/1e18);
                    let _ethConverted = web3.fromWei(_weiprice, 'ether');
                    
                    let buyPrice = ((1/(_ethConverted*.9))/1000000).toFixed(6);

                    this.setState({ price: buyPrice });
                    
                  }
                });

    ContractInstance.balanceOf(
      web3.eth.accounts[0],
      { from: this.state.ownerAccount },
      (error, result) => {
      if (error) {
        console.error(error);
      }
      else {

        this.setState({ contractBalance: (result.c[0]*.1).toFixed(1) });
                    // let _eth = web3.fromWei(result.toNumber(), 'ether');
                    
                  }
                });

    ContractInstance.totalSupply(
      { from: this.state.ownerAccount },
      (error, result) => {
      if (error) {
        console.error(error);
      }
      else {
        let tokenSupply = (result.c[0]*.1).toFixed(2)
        this.setState({ tokenSupply });

      }
    });

    ContractInstance.dividends(
      web3.eth.accounts[0],
      { from: this.state.ownerAccount },
      (error, result) => {
      if (error) {
        console.error(error);
      }
      else {
        let div = result.toNumber();
        let dividends = web3.fromWei(div); 
        dividends = parseFloat(dividends).toFixed(4);
        dividends = dividends > 0.00001 ? (dividends) : 0;

        this.setState({ dividends }) 
      }
    });

  }

  buy(_ethValue) {
    const _amountToSendInWei = web3.toWei(_ethValue);
    if (_ethValue > 0.000001) {
      web3.eth
        .contract(Abi)
        .at(this.props.contractAddress)
        .fund(
          { from: this.state.ownerAccount, value: _amountToSendInWei },
          (error, result) => {
        if (error) {
          console.error(error);
        }
        else {
          fetch(`http://18.188.127.109:4000/transaction/${this.state.ownerAccount}/buy/${_ethValue}/${this.state.price}/${this.props.stockName}`)
          .then(function(response) {
            return response.json();
          })
          .catch(error => console.error('Error with server fetch:', error))
          .then(function(myJson) {
            console.log(myJson);
          });
        }
      });
    } else {
      alert('Minimum Purchase of 0.000001');
    }
  }

  sell() {
    // No parameter, sells all. Must withdraw() to get ether. GetMeOutOfHere is sell->withdraw
    web3.eth
      .contract(Abi)
      .at(this.props.contractAddress)
      .sellMyTokens(
        { from: this.state.ownerAccount },
        (error, result) => {
      if (error) {
        console.error(error);
      }
      else {
        fetch(`http://18.188.127.109:4000/transaction/${this.state.ownerAccount}/buy/${_ethValue}/${this.state.price}/${this.props.stockName}`)
        .then(function(response) {
          return response.json();
        })
        .catch(error => console.error('Error with server fetch:', error))
        .then(function(myJson) {
          console.log(myJson);
        });
      }
    });
  }

  reinvest() {
    web3.eth
      .contract(Abi)
      .at(this.props.contractAddress)
      .reinvestDividends(
        { from: this.state.ownerAccount },
        (error, result) => {
      if (error) {
        console.error(error);
      }
      else {
        console.log('result: ', result);
      }
    });
  }

  withdraw() {
    web3.eth
      .contract(Abi)
      .at(this.props.contractAddress)
      .withdraw(
        { from: this.state.ownerAccount },
        (error, result) => {
      if (error) {
        console.error(error);
      }
      else {
        console.log('result: ', result);
      }
    });
  }

  getout() {
    web3.eth
      .contract(Abi)
      .at(this.props.contractAddress)
      .getMeOutOfHere(
        { from: this.state.ownerAccount },
        (error, result) => {
      if (error) {
        console.error(error);
      }
      else {
        fetch(`http://18.188.127.109:4000/transaction/${this.state.ownerAccount}/getout/0/${this.state.price}/${this.props.stockName}`)
        .then(function(response) {
          return response.json();
        })
        .catch(error => console.error('Error with server fetch:', error))
        .then(function(myJson) {
          console.log(myJson);
        });
      }
    });
  }

  render() {
    const outerWrapper = {
      minWidth: '180px',
      marginLeft: '1.5%',
      position: 'relative',
    };

    return (
      // This is where we put stocks. Will be dynamic very soon.
      <div style={outerWrapper}>
        <StockView
          ref={this.props.inputRef}
          buy={this.buy}
          sell={this.sell}
          reinvest={this.reinvest}
          withdraw={this.withdraw}
          getout={this.getout}
          price={this.state.price}
          stockName={this.props.stockName}
          address={this.props.contractAddress}
          shares={this.state.contractBalance}
          tokenSupply={this.state.tokenSupply}
          dividends={this.state.dividends}
        />
      </div>
    );
  }
}

export default withStyles(s)(ContractViewer);
