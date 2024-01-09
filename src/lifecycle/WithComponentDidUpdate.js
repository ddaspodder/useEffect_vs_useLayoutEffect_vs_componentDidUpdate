import React from "react";

class WithComponentDidUpdate extends React.Component {
  constructor() {
    super();
    this.state = {
      count1: 0,
      count2: 0,
    };
    this.divRefs = new Array(10000).fill(null).map((_, i) => React.createRef());
  }

  getRandom = () => Math.floor(Math.random() * 1000);
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count1 !== this.state.count1) {
      this.divRefs.forEach(({ current: div }) => {
        const offsetWidth = div ? div.offsetWidth : 0;
        console.log(offsetWidth);
      });
      if (this.state.count1 % 2 !== 0) this.setState({ count2: this.getRandom() });
    }
  }

  handleClick = () => {
    this.setState({ count1: this.state.count1 + 1 });
    this.setState({ count2: this.getRandom() });
  };

  render() {
    return (
      <div>
        <h1>componentDidUpdate</h1>
        <div
          style={{
            fontSize: "60px",
            fontWeight: "bold",
            color: this.state.count1 % 2 === 0 ? "green" : "blue",
          }}
        >
          {this.state.count1}
        </div>
        <div
          style={{
            fontSize: "60px",
            fontWeight: "bold",
            color: this.state.count2 % 2 === 0 ? "green" : "blue",
          }}
        >
          {this.state.count2}
        </div>
        <button onClick={this.handleClick}>Try me</button>
      </div>
    );
  }
}

export default WithComponentDidUpdate;
