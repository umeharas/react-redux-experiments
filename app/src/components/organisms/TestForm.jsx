import React from "react";
import TextInput from "../atoms/TextInput";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      q1: '',
      q2: ''
    };
  }

  handleQ1 = (e) => {
    this.setState({q1: e.currentTarget.value });
  }

  handleQ2 = (e) => {
    this.setState({q2: e.currentTarget.value });
  }

  render() {
    return (
      <form>
        <TextInput label="Question 1!" value={this.state.q1} onChange={this.handleQ1} />
        <TextInput label="Question 2!" value={this.state.q2} onChange={this.handleQ2} />
      </form>
    );
  }
}
