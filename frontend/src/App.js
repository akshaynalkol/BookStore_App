import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './Context/AuthProvider';
import ContactUs from './ContactUs/ContactUs';
import { Toaster } from 'react-hot-toast';
import Signup from './Component/Signup';
import AboutUs from './AboutUs/AboutUs';
import Courses from './Courses/Courses';
import Home from './Home/Home';

function App() {
  const [authUser, setAuthUser] = useAuth();
  // console.log(authUser);

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/course' element={authUser ? <Courses /> : <Navigate to='/signup' />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='contact' element={<ContactUs />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </Router>
      <Toaster />
    </>
  );
}

export default App;
