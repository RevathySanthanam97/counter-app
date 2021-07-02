import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.updateBadgeColor()}>{this.printValue()}</span>
        <button
          className="btn btn-grey"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          Increment
        </button>
        <button
          className={`btn btn-grey ${this.decrementDisable()}`}
          onClick={() => this.props.onDecrement(this.props.counter)}
        >
          Decrement
        </button>
        <button
          className="btn btn-red"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }
  clickHandler = () => {
    this.setState({ value: this.props.counter.value + 1 });
  };
  updateBadgeColor() {
    let classes = "badge badge-";
    classes += this.props.counter.value === 0 ? "orange" : "blue";
    return classes;
  }
  decrementDisable() {
    let classes = "btn btn-";
    classes += this.props.counter.value <= 0 ? "greyDisable" : "grey";
    return classes;
  }
  printValue() {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }
}

export default Counter;
