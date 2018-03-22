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
            calculatedTimer: 0,
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
                    //'sellingPrice': (result[1].c[0])/10000,
                    let bags = {
                        'ownerAddress': result[0],
                        'sellingPrice': web3.fromWei(result[1].toNumber()),
                        'nextSellingPrice': web3.fromWei(result[2].toNumber()),
                        'level: ': result[3].c[0],
                        'multipler': result[4].c[0],
                        'purchasedAt': (result[5].toNumber()),
                    }
                    this.setState({ bags });
                    console.log('sucks man', this.props.index, ' price: ', this.state.bags.sellingPrice);
                    let currentTime = (Date.now()/1000).toFixed(0);
                    if (this.state.bags.purchasedAt) {
                    let elapsedTime = 86400 - ((currentTime - this.state.bags.purchasedAt)).toFixed(0);
                    
                    this.setState({calculatedTimer: (elapsedTime)});
                    }

                }
            }.bind(this));
            
    }
    
  buy() {
        //let _amountToSendInWei = this.state.bags.sellingPrice;
         let _amountToSendInWei = web3.toWei(this.state.bags.sellingPrice);
        web3.eth.contract(Abi).at(this.props.contractAddress).purchase(this.props.index, {from: this.state.ownerAccount, value: _amountToSendInWei}, function(error, result) {
            if (error) {
            console.error(error);
            }
            else {
            
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
      let priceFixed = parseFloat(this.state.bags.sellingPrice).toFixed(4);
      let nextPriceFixed = parseFloat(this.state.bags.nextSellingPrice).toFixed(4);
    return ( 
      <div style={outerWrapper}>
        <DayStockView 
        address={this.props.contractAddress}
        stockName={this.props.stockName}
        owner={this.state.bags.ownerAddress}
        price={priceFixed}
        nextPrice={nextPriceFixed}
        purchasedAt={this.state.bags.purchasedAt}
        calculatedTimer = {this.state.calculatedTimer}
        click={this.buy}
        />
      </div>
    );
  }
}

export default withStyles(s)(DayTraderViewer);