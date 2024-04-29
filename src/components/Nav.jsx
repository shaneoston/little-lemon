import React from 'react'
import logo from '../assets/logo.svg'
export const Nav = () => {
return (
    <>
        <img src={logo} alt="Little Lemon logo" />
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Menu</a></li>
            <li><a href="">Reservations</a></li>
            <li><a href="">Login</a></li>
        </ul>
    </>
)
}