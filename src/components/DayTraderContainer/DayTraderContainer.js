import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './DayTraderViewer.css';
import DayTraderViewer from './DayTraderViewer';

class DayTraderContainer extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      featuredDayTraderAddress: {
        'COFFEE':
          '0x14198A76E2543c0a140AA7C0582E1e06888420AC',
        'TULIPS':
           '0x31be0d2149976be6650a8e1a4c00cd5bd179fa55',
        'BOTS':
            '0xa96af9f00bf2672812e374cbd33353a93a1f0752',
      },
      twoMultiplierTraderAddress: {
        'PLATINUM':
            '0x8acf3a3cf142eb3305230982e0cf0d344090f492',
        'CRYP2 KITTIES':
            '0x5d7fe5f36cabc664cc2ab7e7f6c93cc9df889fd4',
        'WAMPUM':
            '0xc76fb6bb684a5cefb423bec1fb31fe319dd9184f',
      }
    };
  }

  render() {
    var outerWrapper = {
     clear: 'left',
    };
    var multiplier = {
     marginTop: '10%',
     marginLeft: '10%', 
     marginRight: '5%',
     clear: 'left',
     float: 'left',
    }
    const OneMultiplierStockView = [];
    Object.keys(this.state.featuredDayTraderAddress).map((key, index) => {
        OneMultiplierStockView.push(
        <DayTraderViewer
          stockName={key}
          contractAddress={
            this.state.featuredDayTraderAddress[key]
          }
        />,
      );
    });

    const TwoMultiplierStockView = [];
    Object.keys(this.state.twoMultiplierTraderAddress).map((key, index) => {
        TwoMultiplierStockView.push(
        <DayTraderViewer
          stockName={key}
          contractAddress={
            this.state.twoMultiplierTraderAddress[key]
          }
        />,
      );
    });
    
    return( 
      <div>
        
        <div style={outerWrapper}>
          <br />
          <h1 style={{ marginLeft: '40%' }}>Day Trader</h1>
          <hr style={{ marginLeft: '35%', width: '23%' }}></hr>
        </div>
        <p style={multiplier}>1.5X </p>
        {OneMultiplierStockView}
        <p style={multiplier}>2.0X </p>
        {TwoMultiplierStockView}
      </div>
    );
  }
}

export default withStyles(s)(DayTraderContainer);
