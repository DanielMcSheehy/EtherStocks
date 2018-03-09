import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ButtonView.css';
import Button from '../Button';
import ConfirmTransaction from '../ConfirmTransaction';

class ButtonView extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.props.buy();
  }
  render() {
    const red = '#ce2b37';
    const green = '#009246';
    const orange = '#f37735';
    const yellow = '#ffc425';
    const lightBlue = '#00aedb';
    const blue = '#0057e7';

    return (
      <div>
        <Button click={this.handleClick}  label="Buy" color={green} />
        <ConfirmTransaction />
        <Button click={this.props.sell} label="Sell" color={red} />
        <Button click={this.props.reinvest} label="Reinvest" color={orange} />
        <Button click={this.props.withdraw} label="Withdraw" color={lightBlue} />
        <Button click={this.props.getout} label="Get Out" color={blue} />
      </div>
    );
  }
}

export default withStyles(s)(ButtonView);
