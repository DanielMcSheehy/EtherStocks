import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Button.css';

class ButtonView extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
  }
  render() {
    const outerWrapper = {
      backgroundColor: this.props.color,
      color: 'white',
      marginBottom: '10px',
      height: '30px',
      width: '85%',
      border: '1px solid #0057e7',
      borderRadius: '4px',
      textAlign: 'center',
    };
    const red = '#ce2b37';
    const green = '#009246';
    const orange = '#f37735';
    const yellow = '#ffc425';
    const lightBlue = '#00aedb';
    const blue = '#0057e7';

    return (
      <div>
        <button onClick={this.props.click} style={outerWrapper}>
          {this.props.label}
        </button>
      </div>
    );
  }
}

export default withStyles(s)(ButtonView);
