import React from 'react';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      starPercentage: '0',
    };
    this.averageStarRating = this.averageStarRating.bind(this);
  }

  componentDidMount() {
    fetch(' http://52.26.193.201:3000/reviews/1/list')
      .then(res => res.json())
      .then(data => this.setState({
        reviews: data.results,
      }))
      .then(moarData => this.averageStarRating());
  }

  averageStarRating() {
    const { reviews } = this.state;
    let ratingSum = 0;
    for (let i = 0; i < reviews.length; i++) {
      ratingSum += reviews[i].rating
    }
    if (ratingSum) {
      const averageRating = ratingSum / reviews.length;
      const starPercentage = (averageRating / 5) * 100;
      console.log('starPercentage', starPercentage)
      this.setState({
        starPercentage: starPercentage
      })
    }
  }

  render() {
    let widthStyle = {
      width: `${this.state.starPercentage}%`,
    };
    return (
      <div id="sidebar">
        <div className="sidebar-header"><h3 className="sidebarTitle">{`Ratings&Reviews`}</h3></div>
        <ul className="list-unstyled components">
          <li>
            <div className="sb-starsParent">
              <p className="sidebarStarNum">3.5</p>
              <div className="sb-stars-outer">
                <div className="sb-stars-inner" style={widthStyle}></div>
              </div>
              <span className="sb-number-rating"></span>
            </div>
            <br></br>
            <div className="sidebarRecommend">100% of reviews recommend this product</div>
            <div className="sidebarStarGraph">
              <p>5 stars</p>
              <p>4 stars</p>
              <p>3 stars</p>
              <p>2 stars</p>
              <p>1 star</p>
              <p>test:</p>
            </div>
            <div className="sizeChart">
              <p>size</p>
              <p>comfort</p>
            </div>
          </li>
        </ul>
        <div id="content">
          <p>Content</p>
        </div>
      </div>
    );
  }
}

export default Sidebar;
