import React, { Component } from 'react';
class ShowCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, addition: true };
  }


  addCount = () => {
    const { step } = this.props;
    this.setState(state => ({ count: state.count + step }));
  }

  subCount = () => {
    const { step } = this.props;
    this.setState(state => ({ count: state.count - step }));
  }

  changeOperation = () => {
    this.setState(state => ({ addition: !state.addition }));
  }

  calc = () => {
    const { addition } = this.state;
    addition ? this.addCount() : this.subCount();
  }

  render() {
    const { step } = this.props;
    const { count, addition } = this.state;

    return (
      <section>
        <h1>count:{count}</h1>
        <h2>step:{step}</h2>
        <button onClick={this.calc}>{addition ? '+' : '-'}</button>
        <button onClick={this.changeOperation}>change</button>
      </section>
    )
  }
}

export default ShowCounter;