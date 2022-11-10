import Topbar from './components/topbar/Topbar.jsx'
import Intro from './components/intro/Intro.jsx'
import Contact from './components/contact/Contact.jsx'
import Portfolio from './components/portfolio/Portfolio.jsx'
import Works from './components/works/Works.jsx'
import Testimonials from './components/testimonials/Testimonials'
import './app.scss'
import { useState } from 'react'
import Menu from './components/menu/Menu.jsx'
function App() {
  const [menuOpen,setMenuOpen]=useState(false)
  return (
    <div className="App">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="section">
      <Intro/>
      <Portfolio/>
      <Testimonials/>
      <Works/>
      <Contact/>
     </div>
    </div>
  );
}

export default App;
