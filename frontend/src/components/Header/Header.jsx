import React,{ useRef, useEffect } from 'react'
import './header.css'
import { Container } from "reactstrap";

import { NavLink, Link } from 'react-router-dom';

const NAV__LINKS = [
  {
    display:'Home',
    url:'/home'
  },
  {
    display:'Market',
    url:'/market'
  },
  {
    display:'Create',
    url:'/create'
  },
  {
    display:'Contact',
    url:'/contact'
  },
 
]

const Header = () => {


  
  return <header className='header'>
<Container>
  <div className='navigation'>
    <div className='logo'>
      <h2 className='d-flex gap-2 align-items-center'>
        <span>
          <i className="ri-fire-fill"></i>
        </span> 
          NFTs
      </h2>
    </div>

    <div className='nav__menu'>
      <ul className='nav__list'> 
      {NAV__LINKS.map((item,index)=>(
          <li className='nav__item' key={index}>
          <NavLink 
            to = {item.url} 
            className= { navClass=> navClass.isActive ? 'active' :'' 
            }
          >
            {item.display}
          </NavLink>
          </li>
        ))}
      </ul>
    </div>

<div className='nav__right d-flex align-items-center gap-5'>
  <button className='btn d-flex gap-2 align-items-center'>
          <span><i className="ri-wallet-line"></i>
      </span> 
    <Link to="/wallet"> Connect Wallet  </Link> 
     </button>
     
    <span className='mobile__menu'><i className="ri-menu-line"></i></span>
</div>


  </div>
</Container>
  </header>
}

export default Header