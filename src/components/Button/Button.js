import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Button.css';

class Button extends React.Component {
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
    var outerWrapper = {
      backgroundColor: '#009246',
      color: 'white',
      marginBottom: '10px',
      height: '30px',
      width: '85%',
      border: '1px solid #0057e7',
      borderRadius: '4px',
      textAlign: 'center',
    };
    let red = '#ce2b37';
    let green = '#009246';
    let orange = '#f37735';
    let yellow = '#ffc425';
    let lightBlue = '#00aedb';
    let blue = '#0057e7';
    let redWrap = {
      backgroundColor: red,
      color: 'white',
      marginBottom: '10px',
      height: '30px',
      width: '85%',
      border: '1px solid #0057e7',
      borderRadius: '4px',
      textAlign: 'center',
    }
    let orangeWrap = {
      backgroundColor: orange,
      color: 'white',
      marginBottom: '10px',
      height: '30px',
      width: '85%',
      border: '1px solid #0057e7',
      borderRadius: '4px',
      textAlign: 'center',
    }
    let yellowWrap = {
      backgroundColor: yellow,
      color: 'white',
      marginBottom: '10px',
      height: '30px',
      width: '85%',
      border: '1px solid #0057e7',
      borderRadius: '4px',
      textAlign: 'center',
    }
    let lightBlueWrap = {
      backgroundColor: lightBlue,
      color: 'white',
      marginBottom: '10px',
      height: '30px',
      width: '85%',
      border: '1px solid #0057e7',
      borderRadius: '4px',
      textAlign: 'center',
    }
    let blueWrap = {
      backgroundColor: blue,
      color: 'white',
      marginBottom: '10px',
      height: '30px',
      width: '85%',
      border: '1px solid #0057e7',
      borderRadius: '4px',
      textAlign: 'center',
    }
    return (
      <div>
        <button style={outerWrapper}>Buy</button>
        <button style ={redWrap}>Sell</button>
        <button style ={orangeWrap}>Reinvest</button>
        <button style ={yellowWrap}>Reinvest</button>
        <button style ={lightBlueWrap}>Withdraw</button>
        <button style ={blueWrap}>Get Out</button>
      </div>
    );
  }
}

export default withStyles(s)(Button);