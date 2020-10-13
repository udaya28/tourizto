import React from 'react';
import './App.css';
import { Header } from './components/header/header.component';
import { Container1 } from './components/container1/container1.component';
function App() {
  // window.onscroll = function() {console.log(document.documentElement.scrollTop)};
  return (
    <div className="App">
      <Header />
      <Container1 />
    </div>
  );
}

export default App;
