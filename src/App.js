import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import  Home from "./components/Home";
import Disease1 from "./components/Disease1";
import Disease2 from "./components/Disease2";
import Disease3 from "./components/Disease3";
import Disease4 from "./components/Disease4";
import Disease5 from "./components/Disease5";

import Heart1 from "./components/Heart1";

import Level1 from "./components/Level1";
import Level1a from "./components/Level1a";
import Level1b from "./components/Level1b";
import Level1c from "./components/Level1c";
import Level1d from "./components/Level1d";

import Level2 from "./components/Level2";
import Level2a from "./components/Level2a";
import Level2b from "./components/Level2b";
import Level2c from "./components/Level2c";
import Level2d from "./components/Level2d";

import Heart2 from "./components/Heart2";
import Heart3 from "./components/Heart3";
import Meditation from "./components/Meditation";

import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";


import Home1 from './pages/Home1/Home1'
import Yoga from './pages/Yoga/Yoga'
import About from './pages/About/About'
import Tutorials from './pages/Tutorials/Tutorials'




function App(){
 

  return(

   
    <BrowserRouter>
 
  
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="disease1" element={<Disease1 />} />
      <Route path="disease2" element={<Disease2 />} />
      <Route path="disease3" element={<Disease3 />} />
      <Route path="disease4" element={<Disease4 />} />
      <Route path="disease5" element={<Disease5 />} />

      <Route path="Heart1" element={<Heart1 />} />

      <Route path="Level1" element={<Level1 />} />
      <Route path="Level1a" element={<Level1a />} />
      <Route path="Level1b" element={<Level1b />} />
      <Route path="Level1c" element={<Level1c />} />
      <Route path="Level1d" element={<Level1d />} />

      <Route path="Level2" element={<Level2 />} />
      <Route path="Level2a" element={<Level2a />} />
      <Route path="Level2b" element={<Level2b />} />
      <Route path="Level2c" element={<Level2c />} />
      <Route path="Level2d" element={<Level2d />} />
      
      <Route path="Heart2" element={<Heart2 />} />
      <Route path="Heart3" element={<Heart3 />} />
      <Route path="Meditation" element={<Meditation />} />

      <Route path="ContactUs" element={<ContactUs />} />

      <Route path="AboutUs" element={<AboutUs />} />

      <Route path='/home1' element={<Home1 />}/>
        <Route path='/start' element={<Yoga />} />
        <Route path='/about' element={<About />} />
        <Route path='/tutorials' element={<Tutorials />} />

    </Routes>
    </BrowserRouter>
   
  );
}

export default App;