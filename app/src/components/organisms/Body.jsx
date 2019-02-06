import React from 'react';
import styled from 'styled-components';
import Button from '../atoms/Button';

export default class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <Container>
        <div>body</div>
        <Button>button</Button>
      </Container>
    )
  }
}


const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
`;
