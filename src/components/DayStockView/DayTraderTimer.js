import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './DayStockView.css';


class DayTraderTimer extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = { time: {}, seconds: this.props.start };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  secondsToTime(secs){
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj;
  }

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
    this.startTimer();
  }

  startTimer() {
    if (this.timer == 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });
    
    // Check if we're at zero.
    if (seconds == 0) { 
      clearInterval(this.timer);
    }
  }

  render() {
    let minutes = this.state.time.m < 10 ? `0${this.state.time.m}` : this.state.time.m;
    let seconds = this.state.time.s < 10 ? `0${this.state.time.s}` : this.state.time.s;
    return(
      <div>
        {this.state.time.h}:{minutes}:{seconds}
      </div>
    );
  }
}

export default withStyles(s)(DayTraderTimer);
