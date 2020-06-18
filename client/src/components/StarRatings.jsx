import React from 'react';


class StarRatings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      something: 'hasValue',
    };
  }

  render() {
    const { something } = this.state;
    return (
      <div>
        <h1>STARS!</h1>
        <h2>{something}</h2>
      </div>
    );
  }
}

export default StarRatings;
