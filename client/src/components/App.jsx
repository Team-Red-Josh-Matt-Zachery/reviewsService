import React, { Component } from 'react';
import StarRatings from './StarRatings.jsx';

class App extends Component {
  constructor() {
    super();

    this.state = {
      reviews: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.getReviewData = this.getReviewData.bind(this);
  }

  componentDidMount() {
    this.getReviewData();
  }

  getReviewData() {
    fetch(' http://52.26.193.201:3000/reviews/1/list')
      .then(res => res.json())
      .then(data => this.setState({
        reviews: data.results,
      }));
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
    const { reviews } = this.state;
    return (
      <div>
        <StarRatings
          reviewData={reviews}
        />
        <input
          type="text"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
