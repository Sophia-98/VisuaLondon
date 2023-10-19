import { createRoot } from "react-dom/client"
import "./main.css"
import MapCanvas from "./components/map/map"
import Newham from "./components/boroughs/Newham/newham"
import Brent from "./components/boroughs/Brent/brent"
import Intro from './components/start/start'
import Greenwich from './components/boroughs/Greenwich/greenwich'
import Southwark from './components/boroughs/Southwark/southwark'

import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

const App = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<Intro />} />
      <Route path="/map" element={<MapCanvas />} />
      <Route path="/newham" element={<Newham />} />
      <Route path="/brent" element={<Brent />} />
      <Route path="/greenwich" element={<Greenwich />} />
      <Route path="/southwark" element={<Southwark />} />

    </Routes>
  </Router>
)

createRoot(document.getElementById("root")).render(<App />)
