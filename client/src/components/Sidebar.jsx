import React from 'react';
import StarBars from './StarBars.jsx'

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      averageRating: 0,
      starPercentage: '0',
      barPercents: [],
      stars: [
        { name: 1, count: 0},
        { name: 2, count: 0},
        { name: 3, count: 0},
        { name: 4, count: 0},
        { name: 5, count: 0},
      ]
    };
    this.averageStarRating = this.averageStarRating.bind(this);
    this.updateEachStarBar = this.updateEachStarBar.bind(this);
  }

  componentDidMount() {
    fetch(' http://52.26.193.201:3000/reviews/1/list')
      .then(res => res.json())
      .then(data => this.setState({
        reviews: data.results,
      }))
      .then(moarData => this.averageStarRating())
      .then(smoreData => this.updateEachStarBar());
  }

  averageStarRating() {
    const { reviews } = this.state;
    let ratingSum = 0;
    for (let i = 0; i < reviews.length; i++) {
      ratingSum += reviews[i].rating;
    }
    if (ratingSum) {
      const averageRating = ratingSum / reviews.length;
      const starPercentage = (averageRating / 5) * 100;
      this.setState({
        starPercentage,
        averageRating,
      });
    }

  }

  updateEachStarBar() {
    const { reviews, stars } = this.state;
    let ratingCounter = 0;
    for (let i = 0; i < reviews.length; i++) {
      let currentRating = reviews[i].rating;
      for (let j = 0; j < stars.length; j++) {
        if (stars[j].name === currentRating) {
          ratingCounter++
          let oldState = stars;
          let updateState = stars[j].count += 1
          oldState[j].count = updateState;
          this.setState({
            stars: oldState,
          });
        }
      }
    }
    let barPercents = [];
    for (let k = 0; k < stars.length; k++) {
      let percentage = ((stars[k].count / ratingCounter) * 100).toFixed(1);
      barPercents.push(`${percentage}%`);
    }
    this.setState({
      barPercents,
    });
  }

  render() {
    let widthStyle = {
      width: `${this.state.starPercentage}%`,
    };
    let { barPercents } = this.state;
    return (
      <div id="sidebar">
        <div className="sidebar-header"><div className="sidebarTitle">{`Ratings & Reviews`}</div></div>
        <ul className="list-unstyled components">
          <li>
            <div className="sb-starsParent">
              <p className="sidebarStarNum">{(this.state.averageRating).toFixed(1)}</p>
              <div className="sb-stars-outer">
                <div className="sb-stars-inner" style={widthStyle}></div>
              </div>
              <span className="sb-number-rating"></span>
            </div>
            <div className="sidebarRecommend">100% of reviews recommend this product</div>
            <StarBars
              barPercents={barPercents}
              filter={this.props.filter}
            />
            <div className="sizeChart">
              {/* <p>size</p>
              <p>comfort</p> */}
            </div>
          </li>
        </ul>
        <div id="content">
          {/* <p>Content</p> */}
        </div>
      </div>
    );
  }
}

export default Sidebar;
