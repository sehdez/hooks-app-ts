import React from 'react'
import { 
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
    } from 'react-router-dom'
import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';
import { HomeScreen } from './HomeScreen';
import { NavBar } from './NavBar';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/" element={<HomeScreen />} />
          <Route  path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </div>
    </Router>
  )
}
