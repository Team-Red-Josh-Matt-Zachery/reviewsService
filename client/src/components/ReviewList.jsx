import React from 'react';
import Review from './Review.jsx';
import Sort from './Sort';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showing: 2,
      reviewList: [],
    }
    this.moreReviews = this.moreReviews.bind(this);
  }

  moreReviews() {
    let oldShowing = this.state.showing;
    if (this.props.reviewData[oldShowing - 1]) {
      oldShowing += 2;
    }
    this.setState({
      showing: oldShowing,
    });
    let newReviewList = this.props.reviewData.slice(0, this.state.showing)
    this.setState({
      reviewList: newReviewList,
    })
  }

  render() {
    let { reviewData } = this.props;
    let { showing } = this.state;
    let visibleStyle = (this.state.showing > this.props.reviewData.length ? {display: 'none'} : {display: 'inline-block'})
    return (
      <div className="container">
        <Sort
          reviewData={reviewData}
        />
        <div className="table table-striped">
          {this.props.reviewData.map(function(product, i) {
            if (i < showing) {
              return <Review
              key={i} 
              name={product.reviewer_name}
              rating={product.rating}
              summary={product.summary}
              body={product.body}
              date={product.date}
              helpfulness={product.helpfulness}
              recommend={product.recommend}
              reviewData={reviewData}
            />
            }
          })}
        </div>
        <button className="more-reviews-button" style={visibleStyle} onClick={this.moreReviews}>More Reviews</button>
        <button className="add-review-button">Add a Review</button>
      </div>
    );
  }
}

export default ReviewList;
