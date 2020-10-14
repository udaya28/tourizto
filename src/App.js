import React from 'react';
import './App.css';
import { Header } from './components/header/header.component';
import { Container1 } from './components/container1/container1.component';
import { Container2 } from './components/container2/container2.component';
import { Container3 } from './components/container3/container3.component';
function App() {
  // window.onscroll = function() {console.log(document.documentElement.scrollTop)};
  return (
    <div className="App">
      <Header />
      <Container1 />
      <Container2/>
      <Container3/>
    </div>
  );
}

export default App;
