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
          <div className="attr-breakdown" style={{width: barPercents[4]}}></div>
        </div>
        <div className="attr-outer">
          <div className="attr-breakdown" style={{width: barPercents[3]}}></div>
        </div>
        <div className="attr-outer">
          <div className="attr-breakdown" style={{width: barPercents[2]}}></div>
        </div>
        <div className="attr-outer">
          <div className="attr-breakdown" style={{width: barPercents[1]}}></div>
        </div>
        <div className="attr-outer">
          <div className="attr-breakdown" style={{width: barPercents[0]}}></div>
        </div>
      </div>
    );
  }
}

export default AttributeGraph;
