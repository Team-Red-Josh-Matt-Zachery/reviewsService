import React, { Component } from 'react';
import ReviewList from './ReviewList';
import Sidebar from './Sidebar';
import { createPortal } from 'react-dom';

class App extends Component {
  constructor() {
    super();

    this.state = {
      reviews: [],
      filterReviews: [],
      hide5Stars: false,
      hide4Stars: false,
      hide3Stars: false,
      hide2Stars: false,
      hide1Stars: false,
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
    const newReviewState = [];
    for (let i = 0; i < reviews.length; i++) {
      if (reviews[i].rating === Number(e.target.innerText[0])) {
        newReviewState.push(reviews[i]);
      }
      for (let key in this.state ) {
        if (key.includes(e.target.innerText[0])) {
          let keyTruth = !!!this.state.key
          console.log(keyTruth)
          this.setState({
            [key]: keyTruth,
          })
        }
      }
    }
    // Here I am filtering and then reseting the original
    // review array
    Promise.resolve(
      this.setState({
        filterReviews: newReviewState,
      }),
    );
  }

  render() {
    const { reviews, filterReviews } = this.state;
    return (
      <div className="sidebarAndRatings">
        <Sidebar
          reviewData={filterReviews}
          filter={this.filterReviewList}
        />
        <ReviewList
          reviewData={filterReviews}
        />
      </div>
    );
  }
}

export default App;
