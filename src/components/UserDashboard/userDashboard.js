import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './userDashboard.css';


class userDashboard extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {};
  }



  render() {

    return (
     <div className={s.outerWrapper}>
         Your Shares:    <br />
	     Your Dividends:   ETH <br />
         Shares Value:   ETH <br />
		 Portfolio Value:  ETH <br />
     </div>
    );
  }
}

export default withStyles(s)(userDashboard);
