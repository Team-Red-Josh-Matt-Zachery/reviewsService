import React, { Component } from 'react';
import ReviewList from './ReviewList';
import Sidebar from './Sidebar';

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
    this.toggleSelected = this.toggleSelected.bind(this);
    // this.updateReviews = this.updateReviews.bind(this);
    // this.handleFilter = this.handleFilter.bind(this);
  }

  componentDidMount() {
    fetch(' http://52.26.193.201:3000/reviews/1/list')
      .then(res => res.json())
      .then(data => this.setState({
        reviews: data.results,
        filterReviews: data.results,
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
  // filterReviewList(e) {
  //   // console.log(e.target.innerText)
  //   let { reviews } = this.state;
  //   let newReviewState = [...this.state.filterReviews];
  //   for (let i = 0; i < reviews.length; i++) {
  //     for (let key in this.state ) {
  //       if (key.includes(e.target.innerText[0])) {
  //         // this is a cool way of toggling state booleans
  //         if (reviews[i].rating === Number(e.target.innerText[0]) && !this.state[key]) {
  //           newReviewState.unshift(reviews[i]);
  //           this.setState(prevState => ({
  //             [key]: !prevState[key],
  //           }))
  //         }
  //       }
  //     }
  //   }
  //   console.log(newReviewState)
  //   // Here I am filtering and then reseting the original
  //   // review array
  //     this.setState({
  //       filterReviews: newReviewState,
  //     })
  // }

  filterReviewList(e) {
    //toggle
    this.toggleSelected(e)
    //check for toggle within comp.D.U.

  }

  componentDidUpdate(previousProps, previousState) {
    let { filterReviews, reviews } = this.state;
    // let newReviewState = reviews;

    let newArr = [];
    let stateEntries = Object.entries(this.state);
    for (let j = 0; j < stateEntries.length; j++) {
      if (!stateEntries[j][1] && !Array.isArray(stateEntries[j][1])) {
        let num = Number(stateEntries[j][0].substring(4, 5))
        console.log(num)
        for (let k = 0; k < reviews.length; k++) {
          if (reviews[k].rating === num) {
            newArr.push(reviews[k])
          }
        }
        //need to push the review that contains this num within this element
      }
    }
    let previousStateStrung = JSON.stringify(previousState)
    if (previousStateStrung !== JSON.stringify(this.state)) {
      this.setState({
        filterReviews: newArr,
      });
    }
  }

  toggleSelected(e) {
    const stateEntries = Object.entries(this.state);
    for (let i = 0; i < stateEntries.length; i++) {
      if (!Array.isArray(stateEntries[i][1]) && stateEntries[i][0].includes(Number(e.target.innerText[0]))) {
        this.setState(prevState => ({
          [stateEntries[i][0]]: !prevState[stateEntries[i][0]],
        }));
      }
    }
  }

  // updateReviews() {
  //   console.log(this.state)
  // }

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
