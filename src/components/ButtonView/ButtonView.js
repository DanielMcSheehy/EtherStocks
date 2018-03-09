import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ButtonView.css';
import Button from '../Button';

class ButtonView extends React.Component {
      constructor(prop) {
        super(prop);
        this.state = {
        };
        this.handleClick =  this.handleClick.bind(this);
      }

  handleClick(event) {
    event.preventDefault();
  }
  render() {
    
    let red = '#ce2b37';
    let green = '#009246';
    let orange = '#f37735';
    let yellow = '#ffc425';
    let lightBlue = '#00aedb';
    let blue = '#0057e7';
    
    return (
      <div>
        <Button label = 'Buy' color = {green}/>
        <Button label = 'Sell' color = {red}/>
        <Button label = 'Reinvest' color = {orange}/>
        <Button label = 'Withdraw' color = {lightBlue}/>
        <Button label = 'Get Out' color = {blue}/>
      </div>
    );
  }
}

export default withStyles(s)(ButtonView);