// eslint-disable-next-line max-len
/* eslint-disable jsx-a11y/anchor-has-content,jsx-a11y/anchor-is-valid,jsx-a11y/control-has-associated-label */
import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import './custom.css';

function LeftSection() {
  return (
    <>
      <ListGroup>
        <ListGroupItem disabled>Profile</ListGroupItem>
        <ListGroupItem>
          <a
            className="center-block text-center profile-img"
            href="#"
          />
          Photo
        </ListGroupItem>
        <ListGroupItem className="text-right">
          2.13.2014
        </ListGroupItem>
      </ListGroup>
    </>
  );
}

export default LeftSection;
