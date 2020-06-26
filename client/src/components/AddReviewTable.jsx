import React, { Component } from 'react';

class AddReviewTable extends Component {
  constructor() {
    super();

    this.state = null;
  }

  render() {
    return (
      <table className="table table-lg">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">5</th>
            <th scope="col">4</th>
            <th scope="col">3</th>
            <th scope="col">2</th>
            <th scope="col">1</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Size</th>
            <td>
            {/*one checkbox */}
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                <label className="form-check-label" htmlFor="defaultCheck1">
                  A size too wide
                </label>
            </div>
            </td>
            <td>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                <label className="form-check-label" htmlFor="defaultCheck1">
                  A size too wide
                </label>
            </div>
            </td>
            <td>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                <label className="form-check-label" htmlFor="defaultCheck1">
                  A size too wide
                </label>
            </div>
            </td>
            <td>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                <label className="form-check-label" htmlFor="defaultCheck1">
                  A size too wide
                </label>
            </div>
            </td>
            <td>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                <label className="form-check-label" htmlFor="defaultCheck1">
                  A size too wide
                </label>
            </div>
            </td>
          </tr>
          <tr>
            <th scope="row">Width</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">Quality</th>
            <td colSpan="1">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row">Length</th>
            <td colSpan="1">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row">Fit</th>
            <td colSpan="1">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default AddReviewTable;
