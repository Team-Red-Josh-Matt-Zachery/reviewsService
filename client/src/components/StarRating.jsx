import React from 'react';

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
    const widthStyle = {
        width: starPercentageRounded,
    }
    return (
      <tr className="philips">
        <td>{`${this.props.name} 4K TV`}</td>
          <td>
            <div className="stars-outer">
              <div className="stars-inner" style={widthStyle}></div>
            </div>
            <span className="number-rating"></span>
        </td>
      </tr>
    )
  }
}

export default StarRating;
