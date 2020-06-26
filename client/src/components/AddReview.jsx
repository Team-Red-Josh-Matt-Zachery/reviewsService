import React from 'react';
import AddReviewTable from './AddReviewTable';

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
              <AddReviewTable />
              {/* table goes here */}
              {/* another chekcbox */}
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck2" disabled></input>
                  <label className="form-check-label" htmlFor="defaultCheck2">
                    Disabled checkbox
                  </label>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
      </div>

    )
  }
}

export default AddReview;