import React from 'react';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      averageRating: 0,
      starPercentage: '0',
      star5: 0,
      star4: 0,
      star3: 0,
      star2: 0,
      star1: 0,
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
    const { reviews } = this.state;
    for (let i = 0; i < reviews.length; i++) {
      let updateStateVal = reviews[i].rating++
      console.log('updatestateval:', updateStateVal)
    //   this.setState({
    //     star
    //   })
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
              <p className="sidebarStarNum">{(this.state.averageRating).toFixed(1)}</p>
              <div className="sb-stars-outer">
                <div className="sb-stars-inner" style={widthStyle}></div>
              </div>
              <span className="sb-number-rating"></span>
            </div>
            <div className="sidebarRecommend">100% of reviews recommend this product</div>
            <div className="sidebarStarGraph">
              <div className="sb-star-label-wrapper">
                <div className="sb-star-labels">{`5 stars: `}
                    <div className="sb-star-breakdown" style={{width: '25%'}}>  
                        <span></span>
                    </div>
                </div>
                <br></br>
                <div className="sb-star-labels">{`4 stars: `}<div className="sb-star-breakdown" style={{width: '25%'}}></div></div>
                <br></br>
                <div className="sb-star-labels">{`3 stars: `}<div className="sb-star-breakdown" style={{width: '25%'}}></div></div>
                <br></br>
                <div className="sb-star-labels">{`2 stars: `}<div className="sb-star-breakdown" style={{width: '25%'}}></div></div>
                <br></br>
                <div className="sb-star-labels">{`1 stars: `}<div className="sb-star-breakdown" style={{width: '25%'}}></div></div>
                <br></br>
              </div>
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
