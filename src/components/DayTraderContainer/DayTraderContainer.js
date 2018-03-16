import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './DayTraderViewer.css';
import DayTraderViewer from './DayTraderViewer';

class DayTraderContainer extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      featuredDayTraderAddress: {
        'Coffee':
          '0x14198A76E2543c0a140AA7C0582E1e06888420AC',
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
