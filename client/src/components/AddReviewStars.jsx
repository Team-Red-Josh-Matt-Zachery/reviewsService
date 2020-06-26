import React from 'react';

class AddReviewStars extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected1: "fa fa-star-o fa-2x rating-star",
      selected2: "fa fa-star-o fa-2x rating-star",
      selected3: "fa fa-star-o fa-2x rating-star",
      selected4: "fa fa-star-o fa-2x rating-star",
      selected5: "fa fa-star-o fa-2x rating-star",
    }
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  onMouseOver(e) {
    let num = Number(e.target.id.substring(7, 8));
    let stateKeys = Object.keys(this.state);
    stateKeys.map(key => {
      if (key.substring(8, 9) < num) {
        this.setState({
          [key]: "fa fa-star fa-2x rating-star"
        })
      }
    })
  }

  onMouseLeave(e) {
    let num = Number(e.target.id.substring(7, 8));
    let stateKeys = Object.keys(this.state);
    stateKeys.map(key => {
      this.setState({
        [key]: "fa fa-star-o fa-2x rating-star"
      });
    })
  }

  render() {
    return (
      <div>
        <div className="add-rating-stars" role="optgroup">
          <i className={`${this.state.selected1}`} onMouseOver={this.onMouseOver} onMouseLeave={this.onMouseLeave} id="rating-1" data-rating="1" tabIndex="0" aria-label="Rate as one out of 5 stars" role="radio"></i>
          <i className={`${this.state.selected2}`} onMouseOver={this.onMouseOver} onMouseLeave={this.onMouseLeave} id="rating-2" data-rating="2" tabIndex="0" aria-label="Rate as two out of 5 stars" role="radio"></i>
          <i className={`${this.state.selected3}`} onMouseOver={this.onMouseOver} onMouseLeave={this.onMouseLeave} id="rating-3" data-rating="3" tabIndex="0" aria-label="Rate as three out of 5 stars" role="radio"></i>
          <i className={`${this.state.selected4}`} onMouseOver={this.onMouseOver} onMouseLeave={this.onMouseLeave} id="rating-4" data-rating="4" tabIndex="0" aria-label="Rate as four out of 5 stars" role="radio"></i>
          <i className={`${this.state.selected5}`} onMouseOver={this.onMouseOver} onMouseLeave={this.onMouseLeave} id="rating-5" data-rating="5" tabIndex="0" aria-label="Rate as five out of 5 stars" role="radio"></i>
        </div>
      </div>
    );
  }
}

export default AddReviewStars;
