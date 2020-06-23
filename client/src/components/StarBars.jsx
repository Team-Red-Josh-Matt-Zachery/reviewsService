import React from 'react';

class StarBars extends React.Component {
  constructor(props) {
    super(props);

    this.state = null;
  }

  render() {
    let { barPercents } = this.props;
    return (
        <div className="sidebarStarGraph">
        <div className="sb-star-label-wrapper">
          <div className="bars-outer">
            <div className="sb-star-labels">{`5 stars `}<div className="sb-star-breakdown" style={{width: barPercents[4]}}></div></div>
          </div>
          <div className="bars-outer">
            <div className="sb-star-labels">{`4 stars `}<div className="sb-star-breakdown" style={{width: barPercents[3]}}></div></div>
          </div>
          <div className="bars-outer">
            <div className="sb-star-labels">{`3 stars `}<div className="sb-star-breakdown" style={{width: barPercents[2]}}></div></div>
          </div>
          <div className="bars-outer">
            <div className="sb-star-labels">{`2 stars `}<div className="sb-star-breakdown" style={{width: barPercents[1]}}></div></div>
          </div>
          <div className="bars-outer">
            <div className="sb-star-labels">{`1 stars `}<div className="sb-star-breakdown" style={{width: barPercents[0]}}></div></div>
          </div>
        </div>
      </div>
    );
  }
}

export default StarBars;
