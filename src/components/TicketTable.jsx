/* eslint-disable react/prop-types */
import React from 'react';

function TicketTable(props) {
  const { ticket } = props;
  return <td>{ticket}</td>;
}

export default TicketTable;
