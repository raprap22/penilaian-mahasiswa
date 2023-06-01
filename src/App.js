import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AddData from './components/AddData';
import DataList from './components/DataList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<DataList />} />
      </Routes>
    </Router>
  );
}

export default App;
