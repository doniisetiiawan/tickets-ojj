/* eslint-disable react/prop-types,react/no-array-index-key */
import React, { Component } from 'react';
import ListPanel from './ListPanel';

class List extends Component {
  getListOfIds = (items) => Object.keys(items);

  createListElements = (items) => {
    let item;

    return this.getListOfIds(items)
      .map((itemId, id) => {
        item = items[itemId];
        return <ListPanel key={id} item={item} />;
      })
      .reverse();
  };

  render() {
    const { items } = this.props;
    const listItemElements = this.createListElements(items);
    return (
      <div
        className={listItemElements.length > 0 ? '' : ''}
      >
        {listItemElements.length > 0
          ? listItemElements
          : ''}
      </div>
    );
  }
}

export default List;
