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
          '0x15a322AAcA55B30112B7f43B4C737E448CcCc8Ab',
        'TULIPS':
           '0x15a322AAcA55B30112B7f43B4C737E448CcCc8Ab',
        'BOTS':
          '0x15a322AAcA55B30112B7f43B4C737E448CcCc8Ab',
      },
      twoMultiplierTraderAddress: {
        'PLATINUM':
            '0x15a322AAcA55B30112B7f43B4C737E448CcCc8Ab',
        'CRYP2 KITTIES':
            '0x15a322AAcA55B30112B7f43B4C737E448CcCc8Ab',
        'WAMPUM':
            '0x15a322AAcA55B30112B7f43B4C737E448CcCc8Ab',
      }
    };
  }

  render() {

    // let oldContract = featuredDayTraderAddress: {
    //   'COFFEE':
    //     '0x14198A76E2543c0a140AA7C0582E1e06888420AC',
    //   'TULIPS':
    //      '0x31be0d2149976be6650a8e1a4c00cd5bd179fa55',
    //   'BOTS':
    //       '0xa96af9f00bf2672812e374cbd33353a93a1f0752',
    // },
    // twoMultiplierTraderAddress: {
    //   'PLATINUM':
    //       '0x8acf3a3cf142eb3305230982e0cf0d344090f492',
    //   'CRYP2 KITTIES':
    //       '0x5d7fe5f36cabc664cc2ab7e7f6c93cc9df889fd4',
    //   'WAMPUM':
    //       '0xc76fb6bb684a5cefb423bec1fb31fe319dd9184f',
    // }

    var outerWrapper = {
     clear: 'left',
    };
    var multiplier = {
     color: '#3b5998',
     fontWeight: 'bold',
     marginTop: '10%',
     marginLeft: '15%', 
     marginRight: '5%',
     clear: 'left',
     float: 'left',
    }
    const OneMultiplierStockView = [];
    Object.keys(this.state.featuredDayTraderAddress).map((key, index) => {
        OneMultiplierStockView.push(
        <DayTraderViewer
          index={index}
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
          index={3+index}
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
          <h1 style={{ marginLeft: '44%' }}>Day Trader </h1>
          
		  <h3 style={{ marginLeft: '42%' }}> Price resets after 24 hours </h3>
      <hr style={{ marginLeft: '39%', width: '23%' }}></hr>
          
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
