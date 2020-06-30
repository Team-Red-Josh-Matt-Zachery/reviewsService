import React from 'react';
import AddReviewTable from './AddReviewTable';
import AddReviewStars from './AddReviewStars';

class AddReview extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      productName: '',
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    fetch('http://52.26.193.201:3000/products/30/')
      .then(response => response.json())
      .then(data => this.setState({
        productName: data.name
      }))
      .catch(err => console.log(err));
  }

  onSubmit() {
    console.log('submitted')
  }

  render() {
    // if(!this.props.show) {
    //   return null;
    // }
    return (
        <div className="add-review-module">
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
            Add Review
        </button>
        <div className="modal fade bd-example-modal-xl" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title" id="exampleModalLongTitle">
                Write your review
                <div className="modal-subtitle">{this.state.productName}</div>
              </div>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="modal-star-rating">Rate the product 1-5:</div>
              <AddReviewStars />
              <br></br>
              <div className="modal-recommend">Would you recommend this product?</div>
              <table className="table table-sm">
                <thead>
                </thead>
                <tbody>
                  <tr>
                  <th scope="row">
                    Yes
                  </th>
                    <td>
                      <input className="form-check-input" type="radio" value="" id="yesRadio" name="YesNoRadio" required></input>
                    </td>
                  </tr>
                  <tr className="YesNoRadio-parent">
                  <th scope="row">
                    No
                  </th>
                    <td>
                      <input className="form-check-input" type="radio" value="" id="noRadio" name="YesNoRadio" required></input>
                    </td>
                  </tr>
                </tbody>
              </table>
              <br></br>
              <p>Please rate the product on the following qualities.</p>
              <div className="table-responsive">
                <AddReviewTable />
              </div>
              <ul className="list-group">
                <li className="list-group-item">
                <div className="input-group input-group-sm mb-3">
                <div className="input-group-prepend">
                  <label className="review-message-title" htmlFor="exampleFormControlTextarea1"></label>
                  <span className="input-group-text" id="inputGroup-sizing-sm">Review Title</span>
                </div>
                <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" required></input>
              </div>
                </li>
                <li className="list-group-item">
                <div className="form-group">
                <textarea placeholder="Please enter your review..." className="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
              </div>
                </li>
                <li className="list-group-item">
                <div className="input-group input-group-sm mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroup-sizing-sm">Nickname</span>
                </div>
                <input type="text" className="form-control" placeholder="Example: jackson11!" aria-label="Small" aria-describedby="inputGroup-sizing-sm" required></input>
              </div>
              <span className="email-privacy">For privacy reasons, do not use your full name or email address.</span>
                </li>
                <li className="list-group-item">
                <div className="input-group input-group-sm mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroup-sizing-sm">Email</span>
                </div>
                <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"></input>
              </div>
                </li>
                <li className="list-group-item">
                  <div className="modal-subtitle">Image upload:</div>
                  <form>
                    <div className="form-group">
                    <label className="btn btn-secondary">
                      Browse <input type="file" hidden></input>
                    </label>
                    </div>
                  </form>
                </li>

              </ul>
            </div>
            <div className="modal-footer">
              <button type="button" className="close-button btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="submit-button btn btn-primary" data-dismiss="modal">Submit review</button>
            </div>
          </div>
        </div>
      </div>
      </div>

    )
  }
}

export default AddReview;