import React from 'react'

export const Footer = () => {
    return (
        <footer className="grid grid-cols-2 grid-rows-1">
            <div>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Menu</a></li>
                    <li><a href="">Reservations</a></li>
                    <li><a href="">Order online</a></li>
                    <li><a href="">Login</a></li>
                </ul>
            </div>
            <div>
                <p>Contact</p>
                <ul>
                    <li><a href="">1234 Anywhere Street</a></li>
                    <li><a href="">London NW11 02J</a></li>
                    <li><a href="">(0)20 7777 8888</a></li>
                    <li><a href="">food@littlelemon.com</a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li><a href="">Facebook</a></li>
                    <li><a href="">Instagram</a></li>
                    <li><a href="">TikTok</a></li>
                </ul>
            </div>
        </footer>
    )
}