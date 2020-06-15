import React from 'react';
import { Container, Row } from 'reactstrap';
import ColumnLeft from './ColumnLeft';
import RightSection from './RightSection';

function TwoColumnLayout() {
  return (
    <>
      <Container>
        <Row>
          <ColumnLeft />
          <RightSection />
        </Row>
      </Container>
    </>
  );
}

export default TwoColumnLayout;
