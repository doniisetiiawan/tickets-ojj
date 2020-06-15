import React from 'react';
import { Col } from 'reactstrap';
import PageTitle from './PageTitle';
import HomePageContent from './HomePageContent';

function RightSection() {
  return (
    <>
      <Col sm="9" className=" profile-desc" id="main">
        <div className="results">
          <PageTitle />
          <HomePageContent />
        </div>
      </Col>
    </>
  );
}

export default RightSection;
