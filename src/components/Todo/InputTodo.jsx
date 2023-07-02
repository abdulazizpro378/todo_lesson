import React, { Component, createRef } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";


export class InputTodo extends Component {
  inputRef = createRef();
  render() {
    const { todo } = this.props;
    const submit = (e) => {
      e.preventDefault();
      this.props.getValue(this.inputRef.current.value);
      this.inputRef.current.value = "";
    };
    this.inputRef.current && (this.inputRef.current.value = todo);
    return (
      <Form onSubmit={submit}>
        <InputGroup className="my-3 w-50 m-auto">
          <Form.Control
            ref={this.inputRef}
            placeholder="..."
            aria-label="Recipient's username"
          />
          <Button type="submit" variant="outline-success" id="button-addon2">
            {todo ? "Save" : 'Add'}
          </Button>
        </InputGroup>
      </Form>
    );
  }
}

export default InputTodo;
