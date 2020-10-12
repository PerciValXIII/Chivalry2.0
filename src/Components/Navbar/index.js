import React,{useState,useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';
import {BrowserRouter as Router } from 'react-router-dom';
import {animateScroll as scroll } from 'react-scroll';

function Navbar({ toggle }) {

const[scrollNav, setScrollNav] = useState(false);

const changeNav = () => {
    if(window.scrollY >= 80) {
        setScrollNav(true)
    }else{
        setScrollNav(false)
    }
}

useEffect(() => {
    window.addEventListener('scroll', changeNav)

},[]);

const toggleHome = () => {
    scroll.scrollToTop();
}

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>CHIVALRY</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Store</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="signup" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Sign Up</NavLinks>
                        </NavItem>
                    </NavMenu>  
                    <NavBtn>
                        <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                    </NavBtn> 
                </NavbarContainer>
            </Nav>
        </>






    );

};

export default Navbar;
