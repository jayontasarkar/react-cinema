import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import Main from './components/main/Main';

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Main />
      </div>
    </>
  );
}

export default App;
