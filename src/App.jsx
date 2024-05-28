/* import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react'
//  import './App.css'

//use path to route
import { Dashboard } from "./pages/Dashboard";
import { Landing } from "./pages/Landing";

function App() {
  return (
    <div>
      < BrowserRouter >
        <Appbar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

function Appbar() {
  const navigate = useNavigate();
  return <div>
    <div>
      <button onClick={() => {
        navigate("/");
      }}>Landing</button>

      <button onClick={() => {
        navigate("/dashboard"); //this is routing this will refresh only client side and then render the Page don't connect again and again to the backend
      }}>Dashboard</button>
    </div>
  </div>
}
*/

//lazy component
import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react'
//  import './App.css'

//use path to route
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Landing = lazy(() => import('./pages/Landing'));

function App() {
  return (
    <div>
      < BrowserRouter >
        <Appbar />
        <Routes>
          <Route path="/dashboard" element={<Suspense fallback={"loading..."}><Dashboard /></Suspense>} />
          <Route path="/" element={<Suspense fallback={"loading..."}><Landing /></Suspense>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

function Appbar() {
  const navigate = useNavigate();
  return <div>
    <div>
      <button onClick={() => {
        navigate("/");
      }}>Landing</button>

      <button onClick={() => {
        navigate("/dashboard"); //this is routing this will refresh only client side and then render the Page don't connect again and again to the backend
      }}>Dashboard</button>
    </div>
  </div>
}

export default App