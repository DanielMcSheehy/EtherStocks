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
        };
        this.getBuyPrice =  this.getBuyPrice.bind(this);
        this.intiateContract = this.intiateContract.bind(this);
        this.setBet = this.setBet.bind(this);
        this.getBets = this.getBets.bind(this);
        this.join = this.join.bind(this);
      }

    componentDidMount () { // Replace current shit with new contracts/event listeners
        if (typeof Web3 != 'undefined') {
          console.log("Using web3 detected from external source like Metamask");
          web3 = new Web3(window.web3.currentProvider); // This is where it listens to metamask
        }else{
          console.log('use metamask!');
          this.web3 = new Web3(new web3.providers.HttpProvider("http://localhost:8545")); // Not to be used.
        }
        
        const MyContract = web3.eth.contract(Abi);
        
        var ContractInstance = MyContract.at(this.props.contractAddress);
        
        console.log(ContractInstance);
        // var newGameEvent = ContractInstance.newGame({},{fromBlock: 0, toBlock: 'latest'});
        
        
        this.setState({
            ownerAccount: web3.eth.accounts[0]
        });

        
        this.getBuyPrice(ContractInstance);
        }
        

    getBuyPrice(ContractInstance) { //Returns total number (not -1)
        let answer;
        this.setState({ContractInstance});
       
            ContractInstance.buyPrice({from: this.state.ownerAccount}, function(error, result) {
                if (error) {
                console.error(error);
                }
                else {
                    //console.log('price: ', web3.toWei(result.c[1]));
                this.setState({ price: web3.fromWei(result.c[1]) })
                }
            }.bind(this));
            
            ContractInstance.balanceOf(web3.eth.accounts[0], {from: this.state.ownerAccount}, function(error, result) {
                if (error) {
                console.error(error);
                }
                else {
                    //console.log('balance: ', result.c[0])
                this.setState({ contractBalance: result.c[0] })
                }
            }.bind(this));

            ContractInstance.totalSupply({from: this.state.ownerAccount}, function(error, result) {
                if (error) {
                console.error(error);
                }
                else {
                    //console.log('token: ', result.c[0])
                this.setState({ tokenSupply: result.c[0] })
                }
            }.bind(this));
    }
    getBets(event) { // Returns all info about certain bet, consider using a loop
        event.preventDefault();
        this.getGameCount();
        let gameTotal = this.state.gamecount;
        for (var i = 0; i<= gameTotal-1; i++){
            this.state.ContractInstance.getBet(i, {from: this.state.ownerAccount}, function(error, result) {
                if (error) {
                console.error(error);
                }
                else {
        
                }
            }.bind(this));
        }
    }
    intiateContract() { // Need to do this to become owner
        this.state.ContractInstance.deployGamble({from: this.state.ownerAccount}, function(error, result) {
            if (error) {
            console.error(error);
            }
            else {
            console.log('result: ', result);
            }
        });
    }
    setBet(event) { // Creates New Game
        event.preventDefault();
        let betValue = this.bet.value;
        let max_players = this.maxPlayers.value;

        this.state.ContractInstance.setBet(betValue, max_players, {from: this.state.ownerAccount}, function(error, result) {
            if (error) {
            console.error(error);
            }
            else {
            console.log('result: ', result);
            }
        });
    }

    join(index, _amountToSendInWei) { // Am I sending the right amount?
        //event.preventDefault();
        //let _amountToSendInWei = 100;
        this.state.ContractInstance.join(index, {from: this.state.ownerAccount, value: _amountToSendInWei}, function(error, result) {
            if (error) {
            console.error(error);
            }
            else {
            console.log('result: ', result);
            }
        });
    }

  render() {
      // <div style={{marginLeft: '10%'}}>  {this.state.games.map((p, index) => <GameView index={index} players={p.players} open={p.open} cost={p.betValue}
      //maxPlayers={p.maxPlayers} winnerAddress={p.winnerAddress} join={this.join.bind(this)} />)} 
      var outerWrapper = {
        height: '500px',
        display: 'block',
        position: 'relative',
      };
      
    return ( // This is where we put stocks. Will be dynamic very soon.
      <div style={outerWrapper}>
        <StockView price= {this.state.price} stockName={this.props.stockName} shares={this.state.price} tokenSupply={this.state.tokenSupply} />
      </div>
    );
  }
}

export default withStyles(s)(ContractViewer);