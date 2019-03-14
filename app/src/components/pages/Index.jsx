import React from 'react';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import TestForm from '../organisms/TestForm';

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <TestForm />
        <Footer />
      </div>
    )
  }
}
