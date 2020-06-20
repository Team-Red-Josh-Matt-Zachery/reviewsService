import React from 'react';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      someState: 'hasValue',
    };
}

  render() {
    const { someState } = this.state;
    return (
      <div id="sidebar">
        <div classNAme="sidebar-header"><h3>I am sidebar header</h3></div>
        <ul className="list-unstyled components">
          <p>Stupid heading</p>
          <li>
            <p>Somethign could go here</p>
          </li>
        </ul>
        <div id="content">
          <p>Content</p>
        </div>
      </div>
    );
  }
}

export default Sidebar;
