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
    // old address: 0x15a322AAcA55B30112B7f43B4C737E448CcCc8Ab
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

export default withStyles(s)(DayTraderContainer);
