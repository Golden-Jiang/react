// 引入第三方模組
import React from 'react'
// 引入本專案模組
import Header from './Components/Header'
import List from './Components/List'
import Footer from './Components/Footer'
// 引入本專案所有樣式
import 'tailwindcss/tailwind.css'
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="wrap">
        <Header />
        <List />
        <Footer />
      </div>
    </div>
  );
}

export default App;
