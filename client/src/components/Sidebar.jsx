import React from 'react';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = null;
    this.averageStarRating = this.averageStarRating.bind(this);
  }

  averageStarRating() {

  }

  render() {
    const widthStyle = {
      width: '100%',
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
