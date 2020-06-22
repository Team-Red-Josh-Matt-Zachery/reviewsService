import React from 'react';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      someState: 'hasValue',
    };
}

  render() {
    const { someState } = this.state;
    return (
      <div id="sidebar">
        <div classNAme="sidebar-header"><h3>{`Ratings&Reviews`}</h3></div>
        <ul className="list-unstyled components">
          <p>3.5 Stars</p>
          <li>
            <p>100% of reviews recommend this product</p>
            <p>5 stars</p>
            <p>4 stars</p>
            <p>3 stars</p>
            <p>2 stars</p>
            <p>1 star</p>
            <p>size</p>
            <p>comfort</p>
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
