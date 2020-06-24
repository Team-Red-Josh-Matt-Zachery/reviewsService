import React, { Component } from 'react';
import ReviewList from './ReviewList';
import Sidebar from './Sidebar';

class App extends Component {
  constructor() {
    super();

    this.state = {
      reviews: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.filterReviewList = this.filterReviewList.bind(this);
  }

  componentDidMount() {
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
  
  // Come back to this tomorrow
  filterReviewList(e) {
    // console.log(e.target.innerText)
    let { reviews } = this.state;
    let newReviewState = reviews.filter(review => review.rating === Number(e.target.innerText[0]));
    console.log(newReviewState);
  }

  render() {
    const { reviews } = this.state;
    return (
      <div className="sidebarAndRatings">
        <Sidebar
          reviewData={reviews}
          filter={this.filterReviewList}
        />
        <ReviewList
          reviewData={reviews}
        />
      </div>
    );
  }
}

export default App;
