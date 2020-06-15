/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import TicketTable from './TicketTable';

class AllTickets extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: JSON.parse(localStorage.getItem('Ticket')),
    };
  }

  getListOfIds = (tickets) => Object.keys(tickets);

  createListElements = (tickets) => this.getListOfIds(tickets).map((ticket, id) => {
    ticket = tickets[ticket];
    return <TicketTable key={id} ticket={ticket} />;
  });

  render() {
    const ticket = this.state.value;
    const listItemElements = this.createListElements(
      ticket,
    );
    return (
      <>
        <div
          className={
            listItemElements.length > 0 ? '' : 'bg-info'
          }
        >
          {listItemElements.length > 0
            ? ''
            : 'You have not raised any ticket yet.'}
        </div>
        <table className="table table-striped table-responsive">
          <thead>
            <tr>
              <th>Date</th>
              <th>Email ID</th>
              <th>Issue Type</th>
              <th>Department</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {listItemElements.length > 0
                ? listItemElements
                : ''}
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}

export default AllTickets;
