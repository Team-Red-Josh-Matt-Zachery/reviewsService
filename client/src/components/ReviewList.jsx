import React from 'react';
import Review from './Review.jsx';
import Sort from './Sort';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);

    this.state = null;
  }

  render() {
    let { reviewData } = this.props;
    return (
      <div className="container">
        <Sort
          reviewData={reviewData}
        />
        <div className="table table-striped">
          {this.props.reviewData.map((product, i) =>
            <Review
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
          )}
        </div>
      </div>
    );
  }
}

export default ReviewList;
