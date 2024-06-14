import logo from './logo.svg';
import "../src/css/index.css"
import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

import Search from './components/serach';


function App() {

  const [searchOpen, isSearchOpen] = useState(false);


  function handleSearchOpen(e) {
    e.preventDefault();
    isSearchOpen(!searchOpen);
  }





  return (
    <div className="App">
      <nav className="navbar">
        {searchOpen && <Search isOpen={handleSearchOpen} searchOpen={searchOpen} />}
        <div className="logo">
          <h4>IFooty</h4>
        </div>
        <ul className="nav-links">
          <li><Link to="/" className="active">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
        </ul>
        <div className="nav-icon">
          <a href="#" onClick={(e) => handleSearchOpen(e)}><i className="fas fa-search"></i></a>
          <Link to="/cart"><i className="fas fa-shopping-bag">
            <span className="cart-item-count">11</span>
          </i></Link>
          <Link href="#"><i className="fas fa-user"></i></Link>
          <Link href="#" className="user"><i className="fas fa-bars"></i></Link>

          <div className="user-info">
            <div className="user-details">
              <i class="fas fa-user"></i>
              <div>
                <p>Imtiaz Ahmad</p>
                <p>ia@email.com</p>
              </div>
            </div>
            <div className="account-actions">
              <div className="change-pass">
                <i class="fas fa-lock"></i>
                <div>
                  <button>Change Password</button>
                </div>
              </div>
              <div className="logout">
                <i class="fas fa-sign-out-alt"></i>
                <div>
                  <button>Logout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
