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
        'PLATINUM':
            '0xf808b1188b47de5dd5bba49f647c5557922f82f0',
      },
    };
  }

  render() {
    var outerWrapper = {
     clear: 'left',
    };
    const FeaturedstockView = [];
    Object.keys(this.state.featuredDayTraderAddress).map((key, index) => {
      FeaturedstockView.push(
        <DayTraderViewer
          stockName={key}
          contractAddress={
            this.state.featuredDayTraderAddress[key]
          }
        />,
      );
    });
    
    return( 
      <div>
        
        <div style={outerWrapper}>
          <br />
          <h1 style={{ marginLeft: '40%' }}>Day Trader</h1>
          <hr style={{ marginLeft: '4%', width: '90%' }}></hr>
        </div>
        {FeaturedstockView}
      </div>
    );
  }
}

export default withStyles(s)(DayTraderContainer);
