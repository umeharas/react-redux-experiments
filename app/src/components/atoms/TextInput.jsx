import React from 'react';
import styled from 'styled-components';

export default class TextInput extends React.PureComponent {
  render() {
    return (
      <Outer>
        <Label>{this.props.label}</Label>
        <Input onChange={this.props.onChange} value={this.props.value}></Input>
      </Outer>
    )
  }
}

// styled-components

const Outer = styled.div`
  /* background-color: #fcfc22; */
`;

const Input = styled.input`
  background-color: #222;
  padding: 0.5em;
  color: #ddd;
`;

const Label = styled.label`
  display: block;
`;
