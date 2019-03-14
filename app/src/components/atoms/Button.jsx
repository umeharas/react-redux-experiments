import React from 'react';
import styled from 'styled-components';

export default class Button extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <Outer onClick={this.props.onClick}>
        {this.props.children}
      </Outer>
    )
  }
}

// styled-components

const Outer = styled.button`
  /* background-color: #fcfc22; */
`;
