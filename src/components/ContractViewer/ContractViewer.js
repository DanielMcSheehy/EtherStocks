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
            gamecount: 0,
            ownerAccount: '',
            betValue: 0,
            maxPlayers: 3,
            games: [],
        };
        this.getGameCount =  this.getGameCount.bind(this);
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
        var ContractInstance = MyContract.at('0x8acf3a3cf142eb3305230982e0cf0d344090f492');
        var newGameEvent = ContractInstance.newGame({},{fromBlock: 0, toBlock: 'latest'});
        var joinedGameEvent = ContractInstance.joined({},{fromBlock: 0, toBlock: 'latest'});
        var winGameEvent = ContractInstance.win({},{fromBlock: 0, toBlock: 'latest'});

        newGameEvent.watch(function(error, result){
            console.log('newgame', result);
            let eventObj = result.args;
            
                let translateObj = {
                    index: eventObj.index.c[0], // needed?
                    winnerAddress: '', //'0x
                    betValue: eventObj.betValue.c[0],
                    maxPlayers: eventObj.maxPlayers.c[0],
                    players: [],
                    open: true //will update on win() event
                };
                    //if (this.state.games.length  < this.state.gamecount) { //Prevent storing duplicate games 
                        var joined = this.state.games.concat(translateObj);
                        this.setState({ games: joined });
                        console.log('setting state', this.state.games);
        }.bind(this));

        joinedGameEvent.watch(function(error, result){ // Includes balance 
            if (error) {
                console.log(error);
            }
            else {
                console.log('joined', result);
                let eventObj = result.args;
                let index = eventObj.index.c[0];
                let newPlayerAddress = eventObj.playerAddress;
                let updatedGames = this.state.games.slice(0);
                try {
                    updatedGames[index].players.push(newPlayerAddress); //FIX!!
                    this.setState({games: updatedGames});
                } catch {
                    console.log('error');
                }
            }
        }.bind(this));

        winGameEvent.watch(function(error, result){ //Include Payout Later
            if (error) {
                console.log(error);
            }
            else {
                console.log('win', result);
                let eventObj = result.args;
                let winnerAddress = eventObj.winnerAddress;
                let index = eventObj.index.c[0];
                let payout = eventObj.payout.c[0];
                let updatedGames = this.state.games.slice(0);
 
                try {
                    updatedGames[index].winnerAddress = winnerAddress;
                    updatedGames[index].open = false;
                    this.setState({games: updatedGames});
                } catch {
                    console.log('error win');
                }
           
            }
        }.bind(this));

        this.setState({
            ContractInstance: ContractInstance,
            ownerAccount: web3.eth.accounts[0]
        });
        console.log('account here: ', ContractInstance);
        
        }
        

    getGameCount() { //Returns total number (not -1)
        let answer;
        this.state.ContractInstance.totalGames({from: this.state.ownerAccount}, function(error, result) {
            if (error) {
            console.error(error);
            }
            else {
            this.setState({ gamecount: result.c[0] })
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
        <StockView stockName='Oil'/>
        <StockView stockName='Gaming'/>
        <StockView stockName='Adult Entertainment'/>
      </div>
    );
  }
}

export default withStyles(s)(ContractViewer);