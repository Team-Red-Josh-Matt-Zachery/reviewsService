import React, { Component } from 'react';

class Sort extends Component {
  constructor(props) {
    super(props);

    this.state = null;
  }

  render() {
    let { reviewData } = this.props;
    return (
      <div className="sort-container">
        <div className="sort-text">
          {reviewData.length} reviews, sorted by
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
