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
       This is the Portfolio
     </div>
    );
  }
}

export default withStyles(s)(userDashboard);
