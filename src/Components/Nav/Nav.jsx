import React, { useEffect, useState } from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
    const [show, handleShow] = useState(false)

    const transitionNavBar = ()=> {
        if(window.scrollY > 100){
            handleShow(true);
        }else{
            handleShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar)
        return () => window.removeEventListener('scroll', transitionNavBar)
    }, [])

    const handleClick = () => {
        window.scrollTo(0, 0)
    }
    return (
        <div className={`nav ${show && 'nav_black'}`}>
            <div className="nav_content">
            <img
            onClick={handleClick} 
            className='nav_logo'
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="netflix logo" />
            <div className='nav_links'>
            <ul>
                <li>
                    <Link to={'/home'}> <a>Inicio</a></Link>
                </li>
                <li>
                    <Link to={'/series'}><a>Series</a> </Link>
                </li>
                <li>
                    <Link to={'/movies'}> <a>Peliculas</a></Link>
                </li>
                <li>
                    <a href="">Mi lista</a>
                </li>
            </ul>
            </div>
            
            <img
             className='nav_avatar'
             src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
            </div>
    </div>
    );
}

export default Nav
