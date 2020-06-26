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
              <input className="form-check-input" type="radio" value="" id="materialUnchecked" name="SizeRadios"></input>
                <label className="form-check-label" htmlFor="materialUnchecked">
                  A size too wide
                </label>
            </div>
            </td>
            <td>
            <div className="form-check">
              <input className="form-check-input" type="radio" value="" id="materialUnchecked" name="SizeRadios"></input>
                <label className="form-check-label" htmlFor="materialUnchecked">
                  1/2 a size too big
                </label>
            </div>
            </td>
            <td>
            <div className="form-check">
              <input className="form-check-input" type="radio" value="" id="materialUnchecked" name="SizeRadios"></input>
                <label className="form-check-label" htmlFor="materialUnchecked">
                  Perfect
                </label>
            </div>
            </td>
            <td>
            <div className="form-check">
              <input className="form-check-input" type="radio" value="" id="materialUnchecked" name="SizeRadios"></input>
                <label className="form-check-label" htmlFor="materialUnchecked">
                  1/2 a size too small
                </label>
            </div>
            </td>
            <td>
            <div className="form-check">
              <input className="form-check-input" type="radio" value="" id="materialUnchecked" name="SizeRadios"></input>
                <label className="form-check-label" htmlFor="materialUnchecked">
                  A size too small
                </label>
            </div>
            </td>
          </tr>
          <tr>
            <th scope="row">Width</th>
            <td>
            {/*one checkbox */}
            <div className="form-check">
              <input className="form-check-input" type="radio" value="" id="materialUnchecked" name="WidthRadios"></input>
                <label className="form-check-label" htmlFor="materialUnchecked">
                  Too wide
                </label>
            </div>
            </td>
            <td>
            <div className="form-check">
              <input className="form-check-input" type="radio" value="" id="materialUnchecked" name="WidthRadios"></input>
                <label className="form-check-label" htmlFor="materialUnchecked">
                  Slightly wide
                </label>
            </div>
            </td>
            <td>
            <div className="form-check">
              <input className="form-check-input" type="radio" value="" id="materialUnchecked" name="WidthRadios"></input>
                <label className="form-check-label" htmlFor="materialUnchecked">
                  Perfect
                </label>
            </div>
            </td>
            <td>
            <div className="form-check">
              <input className="form-check-input" type="radio" value="" id="materialUnchecked" name="WidthRadios"></input>
                <label className="form-check-label" htmlFor="materialUnchecked">
                  Slightly narrow
                </label>
            </div>
            </td>
            <td>
            <div className="form-check">
              <input className="form-check-input" type="radio" value="" id="materialUnchecked" name="WidthRadios"></input>
                <label className="form-check-label" htmlFor="materialUnchecked">
                  Too narrow
                </label>
            </div>
            </td>
          </tr>
          <tr>
          <th scope="row">Comfort</th>
            <td>
            {/*one checkbox */}
            <div className="form-check">
              <input className="form-check-input" type="radio" value="" id="materialUnchecked" name="ComfortRadios"></input>
                <label className="form-check-label" htmlFor="materialUnchecked">
                  Perfect
                </label>
            </div>
            </td>
            <td>
            <div className="form-check">
              <input className="form-check-input" type="radio" value="" id="materialUnchecked" name="ComfortRadios"></input>
                <label className="form-check-label" htmlFor="materialUnchecked">
                  Comfortable
                </label>
            </div>
            </td>
            <td>
            <div className="form-check">
              <input className="form-check-input" type="radio" value="" id="materialUnchecked" name="ComfortRadios"></input>
                <label className="form-check-label" htmlFor="materialUnchecked">
                  Ok
                </label>
            </div>
            </td>
            <td>
            <div className="form-check">
              <input className="form-check-input" type="radio" value="" id="materialUnchecked" name="ComfortRadios"></input>
                <label className="form-check-label" htmlFor="materialUnchecked">
                  Slightly uncomfortable
                </label>
            </div>
            </td>
            <td>
            <div className="form-check">
              <input className="form-check-input" type="radio" value="" id="materialUnchecked" name="ComfortRadios"></input>
                <label className="form-check-label" htmlFor="materialUnchecked">
                  Uncomfortable
                </label>
            </div>
            </td>
          </tr>
          <tr>
            <th scope="row">Quality</th>
            <td>
            {/*one checkbox */}
            <div className="form-check">
              <input className="form-check-input" type="radio" value="" id="materialUnchecked" name="QualityRadios"></input>
                <label className="form-check-label" htmlFor="materialUnchecked">
                  Perfect
                </label>
            </div>
            </td>
            <td>
            <div className="form-check">
              <input className="form-check-input" type="radio" value="" id="materialUnchecked" name="QualityRadios"></input>
                <label className="form-check-label" htmlFor="materialUnchecked">
                  Pretty great
                </label>
            </div>
            </td>
            <td>
            <div className="form-check">
              <input className="form-check-input" type="radio" value="" id="materialUnchecked" name="QualityRadios"></input>
                <label className="form-check-label" htmlFor="materialUnchecked">
                  What I expected
                </label>
            </div>
            </td>
            <td>
            <div className="form-check">
              <input className="form-check-input" type="radio" value="" id="materialUnchecked" name="QualityRadios"></input>
                <label className="form-check-label" htmlFor="materialUnchecked">
                  Below average
                </label>
            </div>
            </td>
            <td>
            <div className="form-check">
              <input className="form-check-input" type="radio" value="" id="materialUnchecked" name="QualityRadios"></input>
                <label className="form-check-label" htmlFor="materialUnchecked">
                  Poor
                </label>
            </div>
            </td>
          </tr>
          <tr>
            <th scope="row">Length</th>
            <td>
            {/*one checkbox */}
            <div className="form-check">
              <input className="form-check-input" type="radio" value="" id="materialUnchecked" name="LengthRadios"></input>
                <label className="form-check-label" htmlFor="materialUnchecked">
                  Runs long
                </label>
            </div>
            </td>
            <td>
            <div className="form-check">
              <input className="form-check-input" type="radio" value="" id="materialUnchecked" name="LengthRadios"></input>
                <label className="form-check-label" htmlFor="materialUnchecked">
                  Runs slightly long
                </label>
            </div>
            </td>
            <td>
            <div className="form-check">
              <input className="form-check-input" type="radio" value="" id="materialUnchecked" name="LengthRadios"></input>
                <label className="form-check-label" htmlFor="materialUnchecked">
                  Perfect
                </label>
            </div>
            </td>
            <td>
            <div className="form-check">
              <input className="form-check-input" type="radio" value="" id="materialUnchecked" name="LengthRadios"></input>
                <label className="form-check-label" htmlFor="materialUnchecked">
                  Runs slightly short
                </label>
            </div>
            </td>
            <td>
            <div className="form-check">
              <input className="form-check-input" type="radio" value="" id="materialUnchecked" name="LengthRadios"></input>
                <label className="form-check-label" htmlFor="materialUnchecked">
                  Runs short
                </label>
            </div>
            </td>
          </tr>
          <tr>
            <th scope="row">Fit</th>
            <td>
            {/*one checkbox */}
            <div className="form-check">
              <input className="form-check-input" type="radio" value="" id="materialUnchecked" name="FitRadios"></input>
                <label className="form-check-label" htmlFor="materialUnchecked">
                  Runs long
                </label>
            </div>
            </td>
            <td>
            <div className="form-check">
              <input className="form-check-input" type="radio" value="" id="materialUnchecked" name="FitRadios"></input>
                <label className="form-check-label" htmlFor="materialUnchecked">
                  Runs slightly long
                </label>
            </div>
            </td>
            <td>
            <div className="form-check">
              <input className="form-check-input" type="radio" value="" id="materialUnchecked" name="FitRadios"></input>
                <label className="form-check-label" htmlFor="materialUnchecked">
                  Perfect
                </label>
            </div>
            </td>
            <td>
            <div className="form-check">
              <input className="form-check-input" type="radio" value="" id="materialUnchecked" name="FitRadios"></input>
                <label className="form-check-label" htmlFor="materialUnchecked">
                  Runs slightly tight
                </label>
            </div>
            </td>
            <td>
            <div className="form-check">
              <input className="form-check-input" type="radio" value="" id="materialUnchecked" name="FitRadios"></input>
                <label className="form-check-label" htmlFor="materialUnchecked">
                  Runs tight
                </label>
            </div>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default AddReviewTable;
