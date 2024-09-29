import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import MainContent from './Components/MainContent'; // Your combined component for Home, Projects, About, and Contact
import Article from './Components/ArticlesPages'; // Your Article component
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main style={{ marginTop: '84px' }}>
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/articles" element={<Article />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
