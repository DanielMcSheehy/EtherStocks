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
        this.getBuyPrice =  this.getBuyPrice.bind(this);
        this.buy = this.buy.bind(this);
        this.sell = this.sell.bind(this);
        this.reinvest = this.reinvest.bind(this);
        this.withdraw = this.withdraw.bind(this);
        this.getout = this.getout.bind(this);
      }

    componentDidMount () { // Replace current shit with new contracts/event listeners
        if (typeof Web3 != 'undefined') {
          console.log("Using web3 detected from external source like Metamask");
          web3 = new Web3(window.web3.currentProvider); // This is where it listens to metamask
        } else {
          console.log('use metamask!');
          this.web3 = new Web3(new web3.providers.HttpProvider("http://localhost:8545")); // Not to be used.
        }
        
        const MyContract = web3.eth.contract(Abi);
        
        var ContractInstance = MyContract.at(this.props.contractAddress);
        
        console.log(ContractInstance);
        
        this.setState({ ownerAccount: web3.eth.accounts[0] });
        
        this.getBuyPrice(ContractInstance);
    }
        
    getBuyPrice(ContractInstance) {    
            ContractInstance.buyPrice({from: this.state.ownerAccount}, function(error, result) {
                if (error) {
                    console.error(error);
                }
                else {
                    //let buyPrice = result.c[1]; //0.008723 
                    //this.setState({ price: web3.fromWei(result.c[1], 'ether') });
                    let _weiprice = result.c[1];
                    let _ethConverted = (_weiprice/1e18);
                    let buyPrice = ((1/(_ethConverted*.9))/1000000).toFixed(6);
                    this.setState({ price: buyPrice });
                }
            }.bind(this));
            
            ContractInstance.balanceOf(web3.eth.accounts[0], {from: this.state.ownerAccount}, function(error, result) {
                if (error) {
                    console.error(error);
                }
                else {
                    this.setState({ contractBalance: (result.c[0]*.1).toFixed(1) })
                    console.log('see this? ', this.state.contractBalance);
                }
            }.bind(this));

            ContractInstance.totalSupply({from: this.state.ownerAccount}, function(error, result) {
                if (error) {
                    console.error(error);
                }
                else {
                    let tokenSupply = (result.c[0]*.1).toFixed(4)
                    this.setState({ tokenSupply });
                }
            }.bind(this));
                
            ContractInstance.dividends(web3.eth.accounts[0], {from: this.state.ownerAccount}, function(error, result) {
                if (error) {
                    console.error(error);
                }
                else {
                    let div = result.c[0];
                    let dividends = web3.fromWei(div); // Shit code  I know. needs to be reformatted
                    dividends = dividends > 0.0001 ? dividends.toFixed(3) : 0;

                    this.setState({ dividends }) //Very low
                }
            }.bind(this));
    }
    
  buy(_ethValue) {
    let _amountToSendInWei = web3.toWei(_ethValue);
    if (_ethValue > 0.000001) {
        web3.eth.contract(Abi).at(this.props.contractAddress).fund({from: this.state.ownerAccount, value: _amountToSendInWei}, function(error, result) {
            if (error) {
            console.error(error);
            }
            else {
            console.log('result: ', result);
            }
        });
    }
    else {
        alert('Minimum Purchase of 0.000001');
    }
  }

  sell() { // No parameter, sells all. Must withdraw() to get ether. GetMeOutOfHere is sell->withdraw
    web3.eth.contract(Abi).at(this.props.contractAddress).sellMyTokens({from: this.state.ownerAccount}, function(error, result) {
        if (error) {
        console.error(error);
        }
        else {
        console.log('result: ', result);
        }
    });
  }

  reinvest() {
    web3.eth.contract(Abi).at(this.props.contractAddress).reinvestDividends({from: this.state.ownerAccount}, function(error, result) {
        if (error) {
        console.error(error);
        }
        else {
        console.log('result: ', result);
        }
    });
  }

  withdraw() {
    web3.eth.contract(Abi).at(this.props.contractAddress).withdraw({from: this.state.ownerAccount}, function(error, result) {
        if (error) {
        console.error(error);
        }
        else {
        console.log('result: ', result);
        }
    });
  }

  getout() {
    web3.eth.contract(Abi).at(this.props.contractAddress).getMeOutOfHere({from: this.state.ownerAccount}, function(error, result) {
        if (error) {
        console.error(error);
        }
        else {
        console.log('result: ', result);
        }
    });
  }

  render() {
      var outerWrapper = {
        marginLeft: '5%',
        float: 'left',
        position: 'relative',
      };
      
    return ( // This is where we put stocks. Will be dynamic very soon.
      <div style={outerWrapper}>
        <StockView 
        buy={this.buy} 
        sell={this.sell} 
        reinvest={this.reinvest} 
        withdraw={this.withdraw} 
        getout={this.getout} 
        price= {this.state.price} 
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