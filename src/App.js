import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo1 from './logo.svg';
import logo2 from './ficon4.png';
import './App.css';
import Search from './Components/Search/Search';

function App() {
  return (
    <div>
      <header className="App">
        <div className="App-header">
          <a href="/header" style={{display: 'flex',textDecoration: 'none'}}>
            <img src={logo2} className="img-logo" alt=""/>
            <h1 className="text text-success" style={{margin: '10px'}}>World Class Foods</h1>
          </a>
          <a href="/header"><img src={logo1} className="spin-logo" alt="logo" /></a>
        </div>
      </header>
      <Search></Search>
    </div>
  );
}

export default App;