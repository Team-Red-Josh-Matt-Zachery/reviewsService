import React, { Component } from 'react';

class AttributeGraph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      barPercents: ['50%', '50%', '50%', '50%', '50%', '50%', '50%'],
    };
  }

  render() {
    let { barPercents } = this.state
    return (
        <div className="attribute-graph">
        <div className="attr-outer">
          {/* <div className="attr-breakdown" style={{width: barPercents[4]}}></div> */}
          <img className="attr-breakdown" width="50%" height="5%" src="https://i.ya-webdesign.com/images/vector-triangles-upside-down-2.png"></img>
        </div>
        <div className="attr-outer">
          {/* <div className="attr-breakdown" style={{width: barPercents[3]}}></div> */}
          <img width="5%" height="5%" src="https://i.ya-webdesign.com/images/vector-triangles-upside-down-2.png"></img>
        </div>
        <div className="attr-outer">
          {/* <div className="attr-breakdown" style={{width: barPercents[2]}}></div> */}
          <img width="5%" height="5%" src="https://i.ya-webdesign.com/images/vector-triangles-upside-down-2.png"></img>

        </div>
        <div className="attr-outer">
          {/* <div className="attr-breakdown" style={{width: barPercents[1]}}></div> */}
          <img width="5%" height="5%" src="https://i.ya-webdesign.com/images/vector-triangles-upside-down-2.png"></img>

        </div>
        <div className="attr-outer">
          {/* <div className="attr-breakdown" style={{width: barPercents[0]}}></div> */}
          <img width="5%" height="5%" src="https://i.ya-webdesign.com/images/vector-triangles-upside-down-2.png"></img>

        </div>
      </div>
    );
  }
}

export default AttributeGraph;
