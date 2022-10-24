import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import BigCard from './components/BigCard';

function App() {
  return (
    <div className="App">
      <Header />
      <BigCard />
      <Footer />
    </div>
  );
}

export default App;
