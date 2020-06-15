import React, { Component } from 'react';
import { Col } from 'reactstrap';
import LeftSection from './LeftSection';

class ColumnLeft extends Component {
  render() {
    return (
      <>
        <Col sm="3" id="sidebar">
          <div className="results">
            <LeftSection />
          </div>
        </Col>
      </>
    );
  }
}

export default ColumnLeft;
