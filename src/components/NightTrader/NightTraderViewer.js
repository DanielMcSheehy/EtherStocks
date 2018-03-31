import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './DayTraderViewer.css';
import Abi from './contractAbi.json';
import NightStockView from '../NightStockView';



var Web3 = require('web3');

class NightTraderViewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ContractInstance: {},
            price: 0,
            timeToContestStart: 0,
            previewTime: 0,
            bags: {},
        };
        this.getBuyPrice =  this.getBuyPrice.bind(this);
        this.buy = this.buy.bind(this);
      }

    componentDidMount () { 
        try {
        if (typeof Web3 != 'undefined') {
          //console.log("Using web3 detected from external source like Metamask");
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
                console.log('Please Use MetaMask ', error);
        }
    }
        
    getBuyPrice(ContractInstance) {    

            ContractInstance.potatoes(this.props.index, {from: this.state.ownerAccount}, function(error, result) { // 0-5
                if (error) {
                    console.error(error);
                }
                else {
                    let bags = {
                        'ownerAddress': result[0],
                        'sellingPrice': web3.fromWei(result[1].toNumber()),
                    }
                    this.setState({ bags });
                }
            }.bind(this));

            ContractInstance.timeLeftToContestStart( {from: this.state.ownerAccount}, function(error, result) { // 0-5
                if (error) {
                    console.error(error);
                }
                else {
                    console.log('result clock', result.toNumber());
                    let timeToContestStart = result.toNumber();
                    this.setState({ timeToContestStart });
                }
            }.bind(this));
    }
    
  buy() {
        //let _amountToSendInWei = this.state.bags.sellingPrice;
         let _amountToSendInWei = web3.toWei(this.state.bags.sellingPrice);
        web3.eth.contract(Abi).at(this.props.contractAddress).buyPotato(this.props.index, {from: this.state.ownerAccount, value: _amountToSendInWei}, function(error, result) {
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

      let previewBuyPrice = (Math.random() * (1.2 - 0.03) + 0.03).toFixed(4); // For nonMetaMask users
      let previewNextPrice = previewBuyPrice*2; 
      let previewAddress = '0x3311b10e76719f1bbfee2e235925b3d80a5e7830';
      let owner = this.state.bags.ownerAddress ? this.state.bags.ownerAddress : previewAddress;

      let timeLeft = this.state.bags.purchasedAt ? ((Date.now())/1000 - (this.state.bags.purchasedAt+1200)).toFixed(0) : '';
      let priceFixed = this.state.bags.sellingPrice ? parseFloat(this.state.bags.sellingPrice).toFixed(4) : previewBuyPrice;
      let nextPriceFixed = this.state.bags.nextSellingPrice ? parseFloat(this.state.bags.nextSellingPrice).toFixed(4) : previewNextPrice;

    return ( 
      <div style={outerWrapper}>
        <NightStockView 
        address={this.props.contractAddress}
        stockName={this.props.stockName}
        owner={owner}
        price={priceFixed}
        nextPrice={nextPriceFixed}
        purchasedAt={this.state.bags.purchasedAt}
        timeToContestStart = {this.state.timeToContestStart}
        cookTime={this.props.cookTime}
        click={this.buy}
        />
      </div>
    );
  }
}

export default withStyles(s)(NightTraderViewer);