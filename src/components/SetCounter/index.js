import React, { Component } from 'react';
import ShowCounter from '../ShowCounter'
import styles from './SetCounter.module.css'
class SetCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { step: 0, timer: 0, disabled: false, valid: true };
  }

  handlerInput = ({ target: { value, name } }) => {
    const re = /^[1-9]\d{0,5}$/;
    if (value === '' || re.test(value)) {
      this.setState({ [name]: Number(value), valid: true });
    } else {
      this.setState({ valid: false });
    }
  };

  updateTimer = () => {
    this.setState(state => ({ timer: state.timer - 1, disabled: state.timer > 1 }))
  }

  render() {
    const { step, timer, disabled, valid } = this.state;
    return (
      <>
        <section className={styles.section}>
          <input
            className={styles.input}
            onChange={this.handlerInput}
            name="step"
            placeholder="step"
            disabled={disabled}
            value={step ? step : ''}
            maxLength={6}
          />
          <input
            className={styles.input}
            onChange={this.handlerInput}
            name="timer"
            placeholder="timer"
            disabled={disabled}
            value={timer ? timer : ''}
            maxLength={6}
          />
          <h2>{valid ? 'Input integer value' : 'Value must be 1-999999'}</h2>
        </section>
        <ShowCounter step={step} timer={timer} updateTimer={this.updateTimer} />
      </>

    )
  }
}

export default SetCounter;