import React from 'react';

const moment = require('moment');

class StarRating extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      starPercentageRounded: 100
    };
    this.getRatings = this.getRatings.bind(this);
  }

  componentDidMount() {
    this.getRatings();
  }

  getRatings() {
    const starsTotal = 5;
    console.log('ran');
    // const ratings = this.state;
    // for (let rating in ratings) {
    //   const starPercentage = (ratings[rating] / starsTotal) * 100;
    //   const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
    // }
    const { rating } = this.props;
    const starPercentage = (rating / starsTotal) * 100;
    const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
    this.setState({
        starPercentageRounded: starPercentageRounded
    });
  }
  
  render() {
    const { starPercentageRounded } = this.state;
    const { name } = this.props;
    const widthStyle = {
        width: starPercentageRounded,
    }
    const date = this.props.date.substring(0, 10);
    return (
      <div className={`${name}`}>
        <h2>{this.props.summary}</h2>
          <div>
            <div className="stars-outer">
              <div className="stars-inner" style={widthStyle}></div>
            </div>
            <span className="number-rating"></span>
        </div>
        <p>{moment(date).format('MMMM Do YYYY')}</p>
        <p>User: {`${name}`}</p>
        <p>{this.props.body}</p>
        <p>Helpful? Yes: ({this.props.helpfulness}) | Report</p>
      </div>
    )
  }
}

export default StarRating;
