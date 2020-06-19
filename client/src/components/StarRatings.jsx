import React from 'react';
import StarRating from './StarRating.jsx';

class StarRatings extends React.Component {
  constructor(props) {
    super(props);

    this.state = [];
  }

  render() {
    return (
      <div className="container">
        <div className="table table-striped">
            {this.props.reviewData.map((product) =>
              <StarRating 
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

export default StarRatings;
