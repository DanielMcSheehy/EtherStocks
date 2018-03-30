import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './DayTraderViewer.css';
import NightTraderViewer from './NightTraderViewer';

class NightTraderContainer extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      featuredDayTraderAddress: {
        'COFFEE':
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
      }
    };
  }

  render() {

    var outerWrapper = {
     clear: 'left',
     
    };
    var multiplier = {
     color: '#3b5998',
     fontWeight: 'bold',
     marginTop: '20%',
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
          contractAddress={
            this.state.twoMultiplierTraderAddress[key]
          }
        />,
      );
    });
    // <h1 style={{ marginLeft: '24%' }}>Day Trader </h1>
          
		//   <h3 style={{ marginLeft: '22%' }}> Price resets after 24 hours </h3>
    //   <hr style={{ marginLeft: '18%', width: '23%' }}></hr>
    return( 
     
        
        <div style={outerWrapper}>
        <p style={multiplier}>1.5X </p>
        {OneMultiplierStockView}
        <p style={multiplier}>2.0X </p>
        {TwoMultiplierStockView}
        </div>
     
    );
  }
}

export default withStyles(s)(NightTraderContainer);
