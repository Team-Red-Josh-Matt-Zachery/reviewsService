import React, { Component } from 'react';

class Sort extends Component {
  constructor(props) {
    super(props);

    this.state = null;
  }

  render() {
    return (
      <div className="sort-container">
        <div className="sort-text">
          248 reviews, sorted by
          &nbsp;
          <a href="http://www.google.com">
            relevance
          </a>
        </div>
      </div>
    );
  }
}

export default Sort;
