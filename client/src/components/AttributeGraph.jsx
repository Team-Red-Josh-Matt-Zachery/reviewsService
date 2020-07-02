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
          <div className="size-graph" style={ size ? {display: 'block'} : {display : 'none'} }>
            <div className="attr-label">Size</div>
            <div className="attr-outer">
              <img className="attr-breakdown-size" height="5%" src="https://i.ya-webdesign.com/images/vector-triangles-upside-down-2.png"></img>
            </div>
          </div>

          <div className="width-graph" style={ width ? {display: 'block'} : {display : 'none'} }>
            <div className="attr-label">Width</div>
            <div className="attr-outer">
              <img className="attr-breakdown-width" style={ width ? {left: width} : {display : 'none'} } height="5%" src="https://i.ya-webdesign.com/images/vector-triangles-upside-down-2.png"></img>
            </div>
          </div>

          <div className="comfort-graph" style={ comfort ? {display: 'block'} : {display : 'none'} }>
            <div className="attr-label">Comfort</div>
            <div className="attr-outer">
              <img className="attr-breakdown-comfort" style={ comfort ? {left: comfort} : {display : 'none'} } height="5%" src="https://i.ya-webdesign.com/images/vector-triangles-upside-down-2.png"></img>
            </div>
          </div>

          <div className="quality-graph" style={ quality ? {display: 'block'} : {display : 'none'} }>
            <div className="attr-label">Quality</div>
            <div className="attr-outer">
              <img className="attr-breakdown-quality" style={ quality ? {left: quality} : {display : 'none'} } height="5%" src="https://i.ya-webdesign.com/images/vector-triangles-upside-down-2.png"></img>
            </div>
          </div>
          <div className="length-graph" style={ length ? {display: 'block'} : {display : 'none'} }>
            <div className="attr-label">Length</div>
            <div className="attr-outer">
              <img className="attr-breakdown-length" style={ length ? {left: length} : {display : 'none'} } height="5%" src="https://i.ya-webdesign.com/images/vector-triangles-upside-down-2.png"></img>
            </div>
          </div>
          <div className="fit-graph" style={ fit ? {display: 'block'} : {display : 'none'} }>
            <div className="attr-label">Fit</div>
            <div className="attr-outer">
              <img className="attr-breakdown-fit" style={ fit ? {left: fit} : {display: 'none'} } height="5%" src="https://i.ya-webdesign.com/images/vector-triangles-upside-down-2.png"></img>
            </div>
          </div>
      </div>
    );
  }
}

export default AttributeGraph;
