import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ConfirmTransaction.css';

class ConfirmTransaction extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      ethValue: 0,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.props.buy(this.state.ethValue);
    this.props.toggle();
  }
  handleChange(event) {
    event.preventDefault();
    this.setState({ ethValue: event.target.value });
    
  }
  render() {
    //      //#009246
    const outerWrapper = {
      backgroundColor: '#009246',
      color: 'white',
      fontSize: '10px',
      marginBottom: '5px',
      marginTop: '-3px',
      display: 'inline-block',
      verticalAlign: 'top',
      top: '0px',
      height: '30px',
      width: '25%',
      border: '1px solid #0057e7',
      borderRadius: '4px',
      textAlign: 'center',
    };
    const textAreaWrap = {
      textAlign: 'right',
      resize: 'none',
      verticalAlign: 'top',
    };
    const red = '#ce2b37';
    const green = '#009246';
    const orange = '#f37735';
    const yellow = '#ffc425';
    const lightBlue = '#00aedb';
    const blue = '#0057e7';

    return (
      <div>
        <textarea onChange={this.handleChange} style={textAreaWrap} rows="1" cols="10" placeholder="eth">
          
        </textarea>
        <button onClick={this.handleClick} style={outerWrapper}>
        confirm
        </button>
      </div>
    );
  }
}

export default withStyles(s)(ConfirmTransaction);
