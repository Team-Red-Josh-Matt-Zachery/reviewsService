import React from 'react';
import StarRating from './StarRating.jsx';

class StarRatings extends React.Component {
  constructor(props) {
    super(props);

    this.state = [
      { name: 'sony', stars: 4.7 },
      { name: 'samsung', stars: 3.4 },
      { name: 'vizio', stars: 2.3 },
      { name: 'panasonic', stars: 3.6 },
      { name: 'philips', stars: 4.1 },
    ];
  }

  render() {
    return (
      <div className="container">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>4k Television</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {this.state.map((product) =>
              <StarRating 
                name={product.name}
                rating={product.stars}
              />
              )}
          </tbody>
        </table>
        <h1>STARS!</h1>
      </div>
    );
  }
}

export default StarRatings;
