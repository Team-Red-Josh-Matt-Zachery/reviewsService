import React from 'react';
import Review from './Review.jsx';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);

    this.state = null;
  }

  render() {
    return (
      <div className="container">
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
                reviewData={this.props.reviewData}
              />
              )}
        </div>
      </div>
    );
  }
}

export default ReviewList;
