import React from 'react';

class StarBars extends React.Component {
  constructor(props) {
    super(props);

    this.state = null;
  }

  render() {
    let { barPercents, filter } = this.props;

    return (
      <div className="sidebarStarGraph">
        <div className="sb-star-labels">
          <div className="starlabel" onClick={filter}>5 stars</div>
          <div className="starlabel" onClick={filter}>4 stars</div>
          <div className="starlabel" onClick={filter}>3 stars</div>
          <div className="starlabel" onClick={filter}>2 stars</div>
          <div className="starlabel" onClick={filter}>1 stars</div>
        </div>
        <div className="bars-outer">
          <div className="sb-star-breakdown" style={{width: barPercents[4]}}></div>
        </div>
        <div className="bars-outer">
          <div className="sb-star-breakdown" style={{width: barPercents[3]}}></div>
        </div>
        <div className="bars-outer">
          <div className="sb-star-breakdown" style={{width: barPercents[2]}}></div>
        </div>
        <div className="bars-outer">
          <div className="sb-star-breakdown" style={{width: barPercents[1]}}></div>
        </div>
        <div className="bars-outer">
          <div className="sb-star-breakdown" style={{width: barPercents[0]}}></div>
        </div>
      </div>
    );
  }
}

export default StarBars;
