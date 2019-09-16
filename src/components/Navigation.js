import React from 'react';
import { Link } from 'react-router-dom'

// STEP 3: SET UP NAVIGATION
  // IMPORT LINK
  // ADD <LINK TO='{USUAL HREF}' FOR EACH ROUTE

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
          {/* <a href="">Home</a> */}
          <Link to='/'>Home</Link>
        </div>
        <div>
          {/* <a href="">About</a> */}
          <Link to='/about'>About</Link>
        </div>
        <div>
          {/* <a href="">Contact</a> */}
          <Link to='/contact'>Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
