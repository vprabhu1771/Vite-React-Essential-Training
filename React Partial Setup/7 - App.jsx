import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ForgetPassword from './components/pages/ForgetPassword';
import AppLayout from './components/layout/AppLayout';

const App = () => {
  return (

    <Router>

      <AppLayout>

        <Routes>
          <Route path="/forget-password" element={<ForgetPassword />} />
          {/* Add more routes here */}
        </Routes>

      </AppLayout>
      
    </Router>
  );
};

export default App;
