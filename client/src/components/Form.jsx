import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState(() => {
      return {
        value,
      };
    });
  }

  render() {
    const { value } = this.state;
    return (
      <form>
        <h1>I am the reviews service!</h1>
        <input
          type="text"
          value={value}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default Form;

ReactDOM.render(<Form />, document.getElementById('reviews'));
