/* eslint-disable react/prop-types */
import React from 'react';

function ListPanel(props) {
  const { item } = props;
  return (
    <div className="panel panel-default">
      <div className="panel-body">
        Emailid: {item.email}
        <br />
        IssueType: {item.issueType}
        <br />
        IssueType: {item.department}
        <br />
        Message: {item.comment}
      </div>
      <div className="panel-footer">
        {item.date.toString()}
      </div>
    </div>
  );
}

export default ListPanel;
