import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './GameView.css';

class GameView extends React.Component {
      constructor(prop) {
        super(prop);
        this.state = {
        };
        this.handleClick =  this.handleClick.bind(this);
      }

  handleClick(event) {
    event.preventDefault();
    if (this.props.open)
      this.props.join(this.props.index, this.props.cost);
  }
  render() {
    let winnerElement = this.props.open ? 'Open': `winner: ${this.props.winnerAddress}` ;
    let activeColor = this.props.open ? 'green':'red';
    return (
      <div style={{ marginTop: '10px', border: `3px solid ${activeColor}`, borderRadius: '3px', padding: '10px', width: '35%' }}>
        <p style={{ marginLeft: '40%'}}>Game: {this.props.index+1}</p>
        <p>Buy-in: {this.props.cost} wei</p>
        {this.props.players.map(p => <p style={{fontSize: '11px'}}>Player: {p}</p>)}
        <p>Openings: {this.props.maxPlayers-this.props.players.length}</p>
        <p onClick={this.handleClick} style={{ marginLeft: '0%', color: activeColor,fontSize: '12px'}}> {winnerElement} </p>
      </div>
    );
  }
}

export default withStyles(s)(GameView);