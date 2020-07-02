import React, { Component } from 'react';

class AttributeGraph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      size: '',
      width: '',
      comfort: '',
      quality: '',
      length: '',
      fit: '',
    };
  }

  componentDidMount() {
    fetch('http://52.26.193.201:3000/reviews/102/meta')
      .then(res => res.json()) 
      .then(data => this.createGraphs(data));
  }

  //Come back to***

  createGraphs(data) {
    let dataKeys = Object.keys(data.characteristics);
    let stateKeys = Object.keys(this.state)
    for (let i = 0; i < dataKeys.length; i++) {
      if (stateKeys.includes(dataKeys[i].toLowerCase())) {
        let widthPercent = ((Number(data.characteristics[dataKeys[i]].value) / 5) * 100)
        widthPercent = `${widthPercent}%`
        this.setState({
          [dataKeys[i].toLowerCase()]: widthPercent,
        });
      }
    }
  }

  render() {
    let { size, width, comfort, quality, length, fit } = this.state;
    let stateKeys = Object.keys(this.state);
    return (
        <div className="attribute-graph">
          <div className="attr-outer">
            <img className="attr-breakdown-size" style={{left: size}} height="5%" src="https://i.ya-webdesign.com/images/vector-triangles-upside-down-2.png"></img>
          </div>
          <div className="attr-outer">
            <img className="attr-breakdown-width" style={{left: width}} height="5%" src="https://i.ya-webdesign.com/images/vector-triangles-upside-down-2.png"></img>
          </div>
          <div className="attr-outer">
            <img className="attr-breakdown-comfort" style={{left: comfort}} height="5%" src="https://i.ya-webdesign.com/images/vector-triangles-upside-down-2.png"></img>
          </div>
          <div className="attr-outer">
            <img className="attr-breakdown-quality" style={{left: quality}} height="5%" src="https://i.ya-webdesign.com/images/vector-triangles-upside-down-2.png"></img>
          </div>
          <div className="attr-outer">
            <img className="attr-breakdown-length" style={{left: length}} height="5%" src="https://i.ya-webdesign.com/images/vector-triangles-upside-down-2.png"></img>
          </div>
          <div className="attr-outer">
            <img className="attr-breakdown-fit" style={{left: fit}} height="5%" src="https://i.ya-webdesign.com/images/vector-triangles-upside-down-2.png"></img>
          </div>
      </div>
    );
  }
}

export default AttributeGraph;
