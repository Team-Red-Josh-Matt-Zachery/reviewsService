import React, { Component } from 'react';

class Sort extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sortBy: 'relevance',
    };
    this.sortRelevance = this.sortRelevance.bind(this);
    this.sortNew = this.sortNew.bind(this);
    this.sortHelpful = this.sortHelpful.bind(this);
  }

  sortRelevance() {
    this.setState({
      sortBy: 'relevance',
    });
  }

  sortNew() {
    this.setState({
      sortBy: 'new',
    });
  }

  sortHelpful() {
    this.setState({
      sortBy: 'helpful',
    });
  }

  render() {
    let { reviewData } = this.props;
    return (
      <div className="sort-container">
        <div className="sort-text">
          {reviewData.length}
          &nbsp;
          reviews, sorted by
          &nbsp;
          {`${this.state.sortBy}`}
          <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Sort by: {`${this.state.sortBy}`}
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <button onClick={this.props.sortByRelevance, this.sortRelevance} className="dropdown-item" type="button">Most relevant</button>
            <button onClick={this.sortNew, this.props.sortByNew} className="dropdown-item" type="button">Newest</button>
            <button onClick={this.sortHelpful, this.props.sortByHelpful, this.sortHelpful} className="dropdown-item" type="button">Most helpful</button>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Sort;
