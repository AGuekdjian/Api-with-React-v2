import React, { useRef, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

export default function Header({ setKeyword }) {
    const kword = useRef(null)

    const search = (e) => {
        e.preventDefault()
        let key = kword.current.value
        if (key === "" || !key) return
        setKeyword(key)
    }

    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <>
            <header className='header desktop'>
                <nav className='navbar'>
                    <form onSubmit={search} className='navbar-form'>
                        <input className='search' ref={kword} type="text" placeholder='Buscar gif...' />
                        <button className='btn' type='submit'><i className="fa-solid fa-magnifying-glass fa-xl"></i></button>
                    </form>

                    <ul className='social-menu'>
                        <li><a href="https://giphy.com/" target='_blank'><img className='img-giphy' src="/giphy.png" alt="logo de giphy" /></a></li>
                        <li><a href='https://www.linkedin.com/in/anthony-guekdjian/' target='_blank'><i className="fa-brands fa-linkedin fa-2xl"></i></a></li>
                        <li><a href='https://github.com/AGuekdjian' target='_blank'><i className="fa-brands fa-github fa-2xl"></i></a></li>
                    </ul>
                </nav>
            </header>

            <div className='mobile'>
                <Navbar color="faded" light>
                    <form onSubmit={search} className='navbar-form'>
                        <input className='search' ref={kword} type="text" placeholder='Buscar gif...' />
                        <button className='btn' type='submit'><i className="fa-solid fa-magnifying-glass fa-xl"></i></button>
                    </form>
                    <NavbarToggler onClick={toggleNavbar} className="me-2" />
                    <Collapse isOpen={!collapsed} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink href="https://www.linkedin.com/in/anthony-guekdjian/" target='_blank' className='gh-in'><i className="fa-brands fa-linkedin fa-2xl"></i></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/AGuekdjian" target='_blank' className='gh-in'><i className="fa-brands fa-github fa-2xl"></i></NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        </>
    )
}
