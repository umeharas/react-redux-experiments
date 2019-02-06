import React from 'react';
import styled from 'styled-components';

export default class Button extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <Outer>
        {this.props.children}
      </Outer>
    )
  }
}

// styled-components

const Outer = styled.div`
  background-color: #fcfc22;
`;
