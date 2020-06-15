/* eslint-disable camelcase,react/prop-types */
import React, { Component } from 'react';
import {
  Button,
  ButtonGroup,
  Form,
  FormGroup,
  Input,
  Label,
} from 'reactstrap';

const max_Char = '140';
const style = { color: '#ffaaaa' };

class AddTicket extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      char_Left: max_Char,
    };
    this.email = React.createRef();
    this.issueType = React.createRef();
    this.department = React.createRef();
    this.comments = React.createRef();
  }

  handleChange = (event) => {
    const input = event.target.value;
    this.setState({
      value: input.substr(0, max_Char),
      char_Left: max_Char - input.length,
    });
    // eslint-disable-next-line eqeqeq
    if (input.length == max_Char) {
      console.log('You have reached the max limit');
    }
  };

  handleSubmitEvent = (event) => {
    event.preventDefault();
    const values = {
      date: new Date(),
      email: this.email.current.value,
      issueType: this.issueType.current.value,
      department: this.department.current.value,
      comment: this.state.value,
    };
    this.props.addTicketList(values);
    localStorage.setItem('Ticket', JSON.stringify(values));
  };

  render() {
    return (
      <Form onSubmit={(event) => this.handleSubmitEvent(event)}>
        <FormGroup>
          <Label htmlFor="email">
            Email <span style={style}>*</span>
          </Label>
          <Input
            type="text"
            id="email"
            innerRef={this.email}
            placeholder="Enter email"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="issueType">
            Issue Type <span style={style}>*</span>
          </Label>
          <Input
            type="select"
            id="issueType"
            innerRef={this.issueType}
          >
            <option value="">-----Select----</option>
            <option value="Access Related Issue">
              Access Related Issue
            </option>
            <option value="Email Related Issues">
              Email Related Issues
            </option>
            <option value="Hardware Request">
              Hardware Request
            </option>
            <option value="Health & Safety">
              Health & Safety
            </option>
            <option value="Network">Network</option>
            <option value="Intranet">Intranet</option>
            <option value="Other">Other</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="department">
            Assign Department <span style={style}>*</span>
          </Label>
          <Input
            type="select"
            id="department"
            innerRef={this.department}
          >
            <option value="">-----Select----</option>
            <option value="Admin">Admin</option>
            <option value="HR">HR</option>
            <option value="IT">IT</option>
            <option value="Development">Development</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="comments">
            Comments <span style={style}>*</span>
          </Label>
          (<span>{this.state.char_Left}</span> characters
          left)
          <Input
            type="textarea"
            value={this.state.value}
            maxLength={max_Char}
            innerRef={this.comments}
            onChange={(event) => this.handleChange(event)}
          />
        </FormGroup>
        <ButtonGroup>
          <Button color="primary">Submit</Button>
          <Button color="link">cancel</Button>
        </ButtonGroup>
      </Form>
    );
  }
}

export default AddTicket;
