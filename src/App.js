import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './components/home/Home'
import About from './components/about/About'
import Contact from './components/contact/Contact';
import Videos from './components/videos/Videos';
import Poems from './components/poems/Poems';
import Error from './components/error/Error';
import facebook from './assets/img/social-media-icons/facebook.png'
import youtube from './assets/img/social-media-icons/youtube.png'
import instagram from './assets/img/social-media-icons/instagram.png'
import tiktok from './assets/img/social-media-icons/tiktok.png'
import logo from './assets/img/logo/site-logo.svg'

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <div className='container'>
            <nav className='df justify-between align-center'>
              <div className='logo-wrapper'>
                <NavLink to='/'>
                <span className='logo'>
                  <img src={logo} alt='notebook'/>
                  </span>
                  </NavLink>
              </div>
              <ul className='main-nav-ul df'>
                <li>
                  <NavLink className='nav-link' to='/'>მთავარი გვერდი</NavLink>
                </li>
                <li>
                  <NavLink className='nav-link' to='/videos'>ვიდეო გალერეა</NavLink>
                </li>
                <li>
                  <NavLink className='nav-link' to='/poems'>ლექსები</NavLink>
                </li>
                <li>
                  <NavLink className='nav-link' to='/about'>ჩემს შესახებ</NavLink>
                </li>
                <li>
                  <NavLink className='nav-link' to='/contact'>კონტაქტი</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <div className='container'>
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/videos' exact element={<Videos />} />
            <Route path='/poems' exact element={<Poems />} />
            <Route path='/about' exact element={<About />} />
            <Route path='/contact' exact element={<Contact />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </div>
        <footer className='footer'>
          <div className='container'>
            <div className='df justify-between align-center'>
              <div className='logo-wrapper'>
              <NavLink to='/'>
                <span className='logo'>
                  <img src={logo} alt='notebook'/>
                  </span>
                  </NavLink>
              </div>
            <div className='footer-links'>
              <div className='social-media df'>
                <a href='https://www.facebook.com/bejani.oniani' target='_blank'>
                  <div className='facebook'>
                    <img className='db' src={facebook} alt='facebook'/>
                  </div>
                </a>
                <a href='instagram.com/bezhoonian1/' target='_blank'>
                  <div className='instagram'>
                    <img className='db' src={instagram} alt='instagram'/>
                  </div>
                </a>
                <a href='https://www.youtube.com/channel/UCnRyQBLXBl1Q4t78rFff9oA' target='_blank'>
                  <div className='youtube'>
                    <img className='db' src={youtube} alt='youtube'/>
                  </div>
                </a>
                <a href='https://www.tiktok.com/@bezhooniani' target='_blank'>
                  <div className='tiktok'>
                    <img className='db' src={tiktok} alt='tiktok'/>
                  </div>
                </a>
              </div>
            </div>
            </div>
          </div>
        </footer>
      </Router>
    </div >
  );
}

export default App;
