import React from 'react'

export const Header = () => {
  return (
    <header className="siteheader">
        <div className="logo">
            <i className='bx bxs-cat logoicon'></i>
            Cat<span className="logopart2">Lovers</span>                
        </div>
        <nav>
            <ul className="navmenu">
                <li><a className="headeranchor" href="#">Home</a></li>
                <li><a className="headeranchor" href="#">Services</a></li>
                <li><a className="headeranchor" href="#">Products</a></li>
                <li><a className="headeranchor" href="#about">About</a></li>
                <li><a className="headeranchor" href="#">Contact</a></li>
                <li><a className="headeranchor" href="#">Country</a></li>
            </ul>

            
        </nav>
        <ul className="navicons">
        <li><a className="navanchor" href="#"><i class='bx bx-search-alt navicon'></i></a></li> 
        <li><a className="navanchor" href="#"><i class='bx bx-menu navicon' ></i></a></li> 
        </ul>
    </header>
  )
}
