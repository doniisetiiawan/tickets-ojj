import React, { Component } from 'react';
import AddTicket from './AddTicket';
import List from './List';

class AddTicketsForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: {},
    };
  }

  updateList = (newList) => {
    this.setState({
      list: newList,
    });
  };

  addTicketList = (item) => {
    const { list } = this.state;
    list[item] = item;

    this.updateList(list);
  };

  render() {
    const items = this.state.list;
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <List items={items} />
            <AddTicket
              addTicketList={(item) => this.addTicketList(item)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default AddTicketsForm;
