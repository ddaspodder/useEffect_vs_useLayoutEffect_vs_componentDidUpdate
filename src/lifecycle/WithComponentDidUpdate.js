import React from "react";

class WithComponentDidUpdate extends React.Component {
  constructor() {
    super();
    this.state = {
      count: -1,
    };
  }

  componentDidMount() {
    for (let i = 0; i < 1000000000; i++) {}
    this.setState({ count: 0 });
  }

  componentDidUpdate(prevProps) {
    for (let i = 0; i < 1000000000; i++) {}
    if (this.state.count > 0 && this.state.count % 2 === 1)
      this.setState({ count: this.state.count + 1 });
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1>componentDidUpdate</h1>
        <div
          style={{
            fontSize: "60px",
            fontWeight: "bold",
            color: this.state.count % 2 === 0 ? "green" : "blue",
          }}
        >
          {this.state.count}
        </div>
        <button onClick={this.handleClick}>Try me</button>
      </div>
    );
  }
}

export default WithComponentDidUpdate;
