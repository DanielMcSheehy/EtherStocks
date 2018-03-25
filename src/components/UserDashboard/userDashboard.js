import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './userDashboard.css';


class userDashboard extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      netShares: 0,
      netWorth: 0,
    };
    this.calculateAssets = this.calculateAssets.bind(this);
  }

  componentDidMount () {
    //console.log('after: ', this.props.featuredStockArr);
    this.calculateAssets();
  }
  
  calculateAssets() {
    let netShares, netWorth = 0;

    for (let i = 0; i < this.props.featuredStockArr.length; i++) {
      netShares += this.props.featuredStockArr[i].contractbalance;
      netWorth = netShares*this.props.featuredStockArr[i].price;
    }
    this.setState({ netShares, netWorth});
  }

  render() {
    
    return (
     <div className={s.outerWrapper}>
        Your Shares:    {this.state.netShares}<br />
	      Your Dividends:   ETH <br />
        Shares Value:   {this.state.netWorth} ETH <br />
      	Portfolio Value:  ETH <br />
     </div>
    );
  }
}

export default withStyles(s)(userDashboard);
