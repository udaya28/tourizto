import React from 'react';
import './App.css';
import { Header } from './components/header/header.component';
import { Container1 } from './components/container1/container1.component';
import { Container2 } from './components/container2/container2.component';
import { Container3 } from './components/container3/container3.component';
class App extends React.Component {
  // window.onscroll = function() {console.log(document.documentElement.scrollTop)};
  constructor(props) {
    super(props);
    this.state = {
      clsName: 'navbar navbar-expand-md navbar-light fix-top',
    };
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, true);
  }
  handleScroll = (event) => {
    if (document.documentElement.scrollTop > 15) {
      this.setState({
        clsName: 'navbar navbar-expand-md navbar-light fix-top dark',
      });
    } else {
      this.setState({
        clsName: 'navbar navbar-expand-md navbar-light fix-top',
      });
    }
  };
  render() {
    return (
      <div className="App">
        <Header {...this.state} />
        <Container1 />
        <Container2 />
        <Container3 />
      </div>
    );
  }
}

export default App;
