import React from 'react';

class StarBars extends React.Component {
  constructor(props) {
    super(props);

    this.state = null;
  }

  render() {
    let { barPercents, filter } = this.props;
    let { hide5Stars, hide4Stars, hide3Stars, hide2Stars, hide1Stars } = this.props;
    let { style } = this.props;


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
        <div className="star-button-title">Filters Selected:</div>
        <button className="stars5-button" style={!hide5Stars ? {display: style } : { display: 'none'}}>5 stars</button>
        <button className="stars4-button" style={!hide4Stars ? {display: style } : { display: 'none'}}>4 stars</button>
        <button className="stars3-button" style={!hide3Stars ? {display: style } : { display: 'none'}}>3 stars</button>
        <button className="stars2-button" style={!hide2Stars ? {display: style } : { display: 'none'}}>2 stars</button>
        <button className="stars1-button" style={!hide1Stars ? {display: style } : { display: 'none'}}>1 stars</button>
        {/* <img src="https://bit.ly/2Ygb3dD" style={recommend ? { float: 'right' } : { display: 'none' }} /> */}
        {/* style={{width: barPercents[4]}} */}
      </div>
    );
  }
}

export default StarBars;
