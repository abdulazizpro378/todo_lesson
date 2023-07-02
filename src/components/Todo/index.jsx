import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

import { Col, Container, Row } from "react-bootstrap";
import InputTodo from "./InputTodo";
import TodoDoneItem from "./TodoDoneItem";
import TodoItem from "./TodoItem";
import { TODOS } from "./Const";

export class Todo extends Component {
  state = {
    todos: JSON.parse(localStorage.getItem(TODOS)) || [
      {
        id: 0,
        title: "playing footbel",
        done: false,
      },
      {
        id: 1,
        title: "reading book",
        done: false,
      },
      {
        id: 1,
        title: "mucok footbel",
        done: true,
      },
    ],
    select: null,
  };

  render() {
    // todoitem and doneitem ga qoshish
    let todos = [];
    const unDoneItem = this.state.todos.filter((todo) => !todo.done);
    const DoneItems = this.state.todos.filter((todo) => todo.done);

    const setTodos = () => {
      this.setState({ todos });
      localStorage.setItem(TODOS, JSON.stringify(todos));
    };

    // inputni qiymatini olish va qoshish
    const getValue = (value) => {
      if (this.state.select === null) {
        todos = [
          ...this.state.todos,
          { id: uuidv4(), title: value, done: false },
        ];
        toast.success("Add successfully !");
      } else {
        todos = this.state.todos.map((td) => {
          if (td.id === this.state.select) {
            td.title = value;
          }
          return td;
        });
        this.setState({ select: null });
        toast.success("Edit successfully !");
      }
      if (value !== "") {
        setTodos();
      } else {
        toast.error("Please fill this input !");
      }
    };

    // done

    const donetodo = (id) => {
      let todos = this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.done = true;
        }
        return todo;
      });
      this.setState({ todos });
      localStorage.setItem(TODOS, JSON.stringify(todos));
    
    };

    // delete

    const deleteTodo = (id) => {
      let todos = this.state.todos.filter((todo) => todo.id !== id);
      this.setState({ todos });
      localStorage.setItem(TODOS, JSON.stringify(todos));
      setTodos();
    };

    // edit

    const editTodo = (id) => {
      this.setState({ select: id });
    };

    let todo = this.state.todos.find((td) => td.id === this.state.select);

    return (
      <Container>
        <InputTodo todo={todo ? todo.title : ""} getValue={getValue} />
        <Row>
          <Col lg={6}>
            {unDoneItem.map((todo) => {
              return (
                <TodoItem
                  editTodo={editTodo}
                  donetodo={donetodo}
                  key={todo.id}
                  {...todo}
                />
              );
            })}
          </Col>

          <Col lg={6}>
            {DoneItems.map((todo) => {
              return (
                <TodoDoneItem deleteTodo={deleteTodo} key={todo.id} {...todo} />
              );
            })}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Todo;
