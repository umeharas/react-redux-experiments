import React from 'react';
import styled from 'styled-components';
import Button from '../atoms/Button';

export default class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  handleCLick = () => {
    //
  };

  render() {
    return (
      <Container>
        <div>body</div>
        <Button onClick={this.handleCLick} >button</Button>
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
