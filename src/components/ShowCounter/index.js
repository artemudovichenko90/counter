import React, { Component } from 'react';
import styles from './ShowCounter.module.css'

class ShowCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { total: 0, addition: true, startedTimer: false };
  }


  addTotal = () => {
    this.setState((state, props) => ({ total: state.total + props.step }));
  }

  subTotal = () => {
    this.setState((state, props) => ({ total: state.total - props.step }));
  }

  changeOperation = () => {
    this.setState(state => ({ addition: !state.addition }));
  }

  calc = () => {
    const { addition } = this.state;
    addition ? this.addTotal() : this.subTotal();
  }

  startTimer = () => {
    const intervalId = setInterval(this.timer, 1000);
    this.setState({ intervalId: intervalId, startedTimer: true });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  timer = () => {
    const { timer, updateTimer } = this.props;
    if (timer > 0) {
      this.calc();
      updateTimer();
    } else {
      this.setState({ startedTimer: false });
      clearInterval(this.state.intervalId);
    }
  }
  render() {
    const { step } = this.props;
    const { total, addition, startedTimer } = this.state;

    return (
      <section className={styles.section}>
        <h1>total:{total}</h1>
        <h2>step:{step}</h2>
        <button onClick={this.calc}>{addition ? '+' : '-'}</button>
        <button onClick={this.changeOperation}>change</button>
        <button onClick={this.startTimer} disabled={startedTimer}>start</button>

      </section>
    )
  }
}

export default ShowCounter;