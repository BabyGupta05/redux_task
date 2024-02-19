import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddDataPage from './components/AddDataPage';
import DataTablePage from './components/DataTablePage';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" component={AddDataPage} />
          <Route path="/data-table" component={DataTablePage} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
