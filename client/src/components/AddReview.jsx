import React from 'react';
import AddReviewTable from './AddReviewTable';
import AddReviewStars from './AddReviewStars';

class AddReview extends React.Component {
  constructor(props) {
    super(props)

    this.state = null;
  }

  render() {
    // if(!this.props.show) {
    //   return null;
    // }
    return (
        <div>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
            Add Review
        </button>
        <div className="modal fade bd-example-modal-xl" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">Add Review</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="modal-star-rating">Rate the product 1-5:</div>
              <AddReviewStars />
              <div className="modal-recommend">Would you recommend this produdct?</div>

              <AddReviewTable />
              <div className="input-group input-group-sm mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroup-sizing-sm">Summary</span>
                </div>
                <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"></input>
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Review Message:</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div className="input-group input-group-sm mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroup-sizing-sm">Nickname</span>
                </div>
                <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"></input>
              </div>
              <div className="input-group input-group-sm mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroup-sizing-sm">Email</span>
                </div>
                <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"></input>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Submit review</button>
            </div>
          </div>
        </div>
      </div>
      </div>

    )
  }
}

export default AddReview;