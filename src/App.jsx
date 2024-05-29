//? use navigation to randers page | cons is it fetch all pages at once | pros for small application its pretty
//todo create folder pages  and then two file Dashboard.jsx OR Loading.jsx
//* routing client side using navigate
/* 
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
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
// !++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// * client side routing using lazy component
// ? lazy component | cons it take some time to render the page or fetch the page | pros for 50-70 or more pages it's good to render only those needs pages
// todo create folder pages  and then two file Dashboard.jsx OR Loading.jsx
/*
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
*/
//! +++++++++++++++++++++++++++++++++++++++++++++++++++++

// * prop drilling
// todo create folder pages  and then two file Dashboard.jsx OR Loading.jsx
/* import { useState } from 'react'
//  import './App.css'



function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
    <Count count={count} setCount={setCount} />
    </div>
  )
}


function Count({count, setCount}) {
  return <div>
  {count}
  <Buttons count={count} setCount={setCount} />
  </div>
}


function Buttons({ count, setCount }) {
  return <div>
  <button onClick={() => { setCount(count + 1) }}>Increase</button>
  <button onClick={() => { setCount(count - 1) }}>Decrease</button>
  </div>
  

} */

//  !++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//* Context API
// todo create folder pages  and then two file Dashboard.jsx OR Loading.jsx OR context.jsx
import { useContext, useState } from "react"
import { CountContext } from "./pages/context";

function App() {
  const [count, setCount] = useState(0);

  // wrap anyone that want to use the teleported value inside a provider
  return (
    <div>
      <CountContext.Provider value={count}>
      <Count setCount={setCount} />
      </CountContext.Provider>
    </div>
  )
}

function Count({ setCount }) {
  return <div>
    <CountRenderer />
    <Buttons setCount={setCount} />
  </div>
}

function CountRenderer() {
  const count = useContext(CountContext);
  return <div>
    {count}
  </div>
}

function Buttons({ setCount }) {
  const count = useContext(CountContext);
  return <div>
    <button onClick={() => {
      setCount(count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count - 1)
    }}>Decrease</button>
  </div>
}


export default App;
