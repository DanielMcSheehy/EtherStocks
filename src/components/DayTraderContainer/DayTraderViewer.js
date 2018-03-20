import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './DayTraderViewer.css';
import Abi from './contractAbi.json';
import DayStockView from '../DayStockView';



var Web3 = require('web3');

class DayTraderViewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ContractInstance: {},
            price: 0,
            bags: {},
        };
        this.getBuyPrice =  this.getBuyPrice.bind(this);
        this.buy = this.buy.bind(this);
      }

    componentDidMount () { // Replace current shit with new contracts/event listeners
        try {
        if (typeof Web3 != 'undefined') {
          console.log("Using web3 detected from external source like Metamask");
          web3 = new Web3(window.web3.currentProvider); // This is where it listens to metamask
        } else {
          console.log('use metamask!');
          this.web3 = new Web3(new web3.providers.HttpProvider("http://localhost:8545")); // Not to be used.
        }
        
            
        
        const MyContract = web3.eth.contract(Abi);
        
        var ContractInstance = MyContract.at(this.props.contractAddress);
        
        //console.log(ContractInstance);
        
        this.setState({ ownerAccount: web3.eth.accounts[0] });
        
        this.getBuyPrice(ContractInstance);

        } catch (error) {
                console.log('Please Use MetaMask ');
        }
    }
        
    getBuyPrice(ContractInstance) {    

            ContractInstance.getBag(this.props.index, {from: this.state.ownerAccount}, function(error, result) { // 0-5
                if (error) {
                    console.error(error);
                }
                else {
                    let bags = {
                        'ownerAddress': result[0],
                        'sellingPrice': (result[1].c[0])/10000,
                        'nextSellingPrice': (result[2].c[0])/10000,
                        'level: ': result[3].c[0],
                        'multipler': result[4].c[0],
                        'purchasedAt': (result[5].toNumber()),
                    }
                    this.setState({ bags })
                    //console.log('result', result);
                }
            }.bind(this));

    }
    
  buy() {
        let _amountToSendInWei = web3.toWei(this.state.bags.sellingPrice);
        web3.eth.contract(Abi).at(this.props.contractAddress).purchase(this.props.index, {from: this.state.ownerAccount, value: _amountToSendInWei}, function(error, result) {
            if (error) {
            console.error(error);
            }
            else {
            alert('Purchased');
            }
        });
  }

  render() {
      var outerWrapper = {
        marginLeft: '5%',
        marginTop: '10px',
        position: 'relative',
      };
      //let timeLeft =  this.state.bags.purchasedAt ?  ((Date.now())/1000 - (this.props.purchasedAt+1200)).toFixed(0) : 10;
      let timeLeft = ((Date.now())/1000 - (this.state.bags.purchasedAt+1200)).toFixed(0);
    return ( 
      <div style={outerWrapper}>
        <DayStockView 
        address={this.props.contractAddress}
        stockName={this.props.stockName}
        owner={this.state.bags.ownerAddress}
        price={this.state.bags.sellingPrice}
        nextPrice={this.state.bags.nextSellingPrice}
        purchasedAt={this.state.bags.purchasedAt}
        calculatedTimer = {timeLeft}
        click={this.buy}
        />
      </div>
    );
  }
}

export default withStyles(s)(DayTraderViewer);