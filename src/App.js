import './App.css';
import { BrowserRouter as Router, Route, Routes, NavLink, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import List from './pages/List';
import CreateNew from './pages/CreateNew';
import { useState, useEffect } from 'react';
import { auth } from './firebaseConfig';
import { signOut } from 'firebase/auth';
import Navigation from './components/Navigation';


function App() {



  return (
    
    <Router>

      
      <Navigation></Navigation>

        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/list' element={<List />}/>
          <Route path='/create' element={<CreateNew />}/>
        </Routes>
    </Router>
    
  );
}

export default App;
