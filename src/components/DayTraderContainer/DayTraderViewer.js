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
    }
        
    getBuyPrice(ContractInstance) {    
            // ContractInstance.buyPrice({from: this.state.ownerAccount}, function(error, result) {
            //     if (error) {
            //         console.error(error);
            //     }
            //     else {
            //         //let buyPrice = result.c[1]; //0.008723 
            //         //this.setState({ price: web3.fromWei(result.c[1], 'ether') });
            //         console.log(result);
            //         let _weiprice = result.c[1];
            //         //let _ethConverted = (_weiprice/1e18);
            //         let _ethConverted = web3.fromWei(_weiprice, 'ether');
                    
            //         let buyPrice = ((1/(_ethConverted*.9))/1000000).toFixed(6);
            //             //282303516109755     82303516109755
            //         buyPrice = (buyPrice/3.6).toFixed(6); //Bad
            //         this.setState({ price: buyPrice });
            //     }
            // }.bind(this));
            
            ContractInstance.getBag(0, {from: this.state.ownerAccount}, function(error, result) {
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
                        'purchasedAt': (result[5].c[0])/10000,
                    }
                    this.setState({ bags })
                    console.log('result', result);
                }
            }.bind(this));

            // ContractInstance.totalSupply({from: this.state.ownerAccount}, function(error, result) {
            //     if (error) {
            //         console.error(error);
            //     }
            //     else {
            //         let tokenSupply = (result.c[0]*.1).toFixed(4)
            //         this.setState({ tokenSupply });
            //     }
            // }.bind(this));
                
            // ContractInstance.dividends(web3.eth.accounts[0], {from: this.state.ownerAccount}, function(error, result) {
            //     if (error) {
            //         console.error(error);
            //     }
            //     else {
            //         let div = result.c[0];
            //         let dividends = web3.fromWei(div); // Shit code  I know. needs to be reformatted
            //         dividends = dividends > 0.0001 ? dividends.toFixed(3) : 0;

            //         this.setState({ dividends }) //Very low
            //     }
            // }.bind(this));
    }
    
  buy() {
        let _amountToSendInWei = web3.toWei(this.state.bags.sellingPrice);
        web3.eth.contract(Abi).at(this.props.contractAddress).purchase(0,{from: this.state.ownerAccount, value: _amountToSendInWei}, function(error, result) {
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
      
    return ( // This is where we put stocks. Will be dynamic very soon.
      <div style={outerWrapper}>
        <DayStockView 
        stockName={this.props.stockName}
        owner={this.state.bags.ownerAddress}
        price={this.state.bags.sellingPrice}
        nextPrice={this.state.bags.nextSellingPrice}
        click={this.buy}
        />
      </div>
    );
  }
}

export default withStyles(s)(DayTraderViewer);