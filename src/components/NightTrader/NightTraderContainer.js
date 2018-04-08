import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './DayTraderViewer.css';
import Abi from './contractAbi.json';
import NightTraderViewer from './NightTraderViewer';

class NightTraderContainer extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      ownerAccount: '',
      contractBalance: 0,
      cookTime: 0,
      featuredDayTraderAddress: { //Featured
        'ETHERGOO.IO':
          '0x6d7de51bcfa5b4f3d470de3aca3041e0908060e5',
        'TULIPS':
           '0x6d7de51bcfa5b4f3d470de3aca3041e0908060e5',
        'BOTS':
          '0x6d7de51bcfa5b4f3d470de3aca3041e0908060e5',
      },
      twoMultiplierTraderAddress: {
        'PLATINUM':
            '0x6d7de51bcfa5b4f3d470de3aca3041e0908060e5',
        'CRYP2 KITTIES':
            '0x6d7de51bcfa5b4f3d470de3aca3041e0908060e5',
        'WAMPUM':
            '0x6d7de51bcfa5b4f3d470de3aca3041e0908060e5',
      },
      threeMultiplierTraderAddress: {
        'KARMA':
            '0x6d7de51bcfa5b4f3d470de3aca3041e0908060e5',
        'COCOA':
            '0x6d7de51bcfa5b4f3d470de3aca3041e0908060e5',
        'MICRO DOSE':
            '0x6d7de51bcfa5b4f3d470de3aca3041e0908060e5',
      }
    };
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
      var ContractInstance = MyContract.at('0x6d7de51bcfa5b4f3d470de3aca3041e0908060e5');    
      this.setState({ ownerAccount: web3.eth.accounts[0] });
                ContractInstance.getBalance( {from: this.state.ownerAccount}, function(error, result) { // 0-5
                  if (error) {
                      console.error(error);
                  }
                  else {
                      let contractBalance = result.toNumber();
                      contractBalance = web3.fromWei(contractBalance);
                      this.setState({ contractBalance });
                  }
              }.bind(this));

              ContractInstance.timeLeftToCook( {from: this.state.ownerAccount}, function(error, result) { // 0-5
                if (error) {
                    console.error(error);
                }
                else {
                    let cookTime = result.toNumber();
                    this.setState({ cookTime });
                }
            }.bind(this));

    } catch (error) {
            console.log('Please Use MetaMask ', error);
    }
  }

  render() {

    var outerWrapper = {
     clear: 'left',
     
    };
    var multiplier = {
     color: '#3b5998',
     fontWeight: 'bold',
     marginTop: '0%',
     marginLeft: '0%', 
     marginRight: '0%',
     clear: 'left',
     float: 'left',
    }
    const OneMultiplierStockView = [];
    Object.keys(this.state.featuredDayTraderAddress).map((key, index) => {
        OneMultiplierStockView.push(
        <NightTraderViewer
          index={index}
          stockName={key}
          cookTime={this.state.cookTime}
          contractAddress={
            this.state.featuredDayTraderAddress[key]
          }
        />,
      );
    });

    const TwoMultiplierStockView = [];
    Object.keys(this.state.twoMultiplierTraderAddress).map((key, index) => {
        TwoMultiplierStockView.push(
        <NightTraderViewer
          index={3+index}
          stockName={key}
          cookTime={this.state.cookTime}
          contractAddress={
            this.state.twoMultiplierTraderAddress[key]
          }
        />,
      );
    });
    const ThreeMultiplierStockView = [];
    Object.keys(this.state.threeMultiplierTraderAddress).map((key, index) => {
        ThreeMultiplierStockView.push(
        <NightTraderViewer
          index={6+index}
          stockName={key}
          cookTime={this.state.cookTime}
          contractAddress={
            this.state.threeMultiplierTraderAddress[key]
          }
        />,
      );
    });
    // <h1 style={{ marginLeft: '24%' }}>Day Trader </h1>
          
		//   <h3 style={{ marginLeft: '22%' }}> Price resets after 24 hours </h3>
    //   <hr style={{ marginLeft: '18%', width: '23%' }}></hr>
    let contractBalance = this.state.contractBalance ? parseFloat(this.state.contractBalance).toFixed(4) : 0;
    return( 
      <div>
        <div className={s.pot}>
          Jackpot: <span className={s.innerText}>{contractBalance} ETH </span>
        </div>  
      
        <div style={outerWrapper}>
          <p style={multiplier}> </p>
          {OneMultiplierStockView}
          <p style={multiplier}> </p>
          {TwoMultiplierStockView}
          <p style={multiplier}> </p>
          {ThreeMultiplierStockView}
        </div>
     </div>
    );
  }
}

export default withStyles(s)(NightTraderContainer);
