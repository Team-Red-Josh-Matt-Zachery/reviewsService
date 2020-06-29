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
          {reviewData.length}
          reviews, sorted by
          &nbsp;
          <button onClick={this.props.sortByNew}>
            relevance
          </button>
        </div>
      </div>
    );
  }
}

export default Sort;
