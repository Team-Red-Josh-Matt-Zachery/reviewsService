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
          <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Search by:
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">Relevance</a>
            <a className="dropdown-item" href="#">New</a>
            <a className="dropdown-item" href="#">Helpful</a>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Sort;
