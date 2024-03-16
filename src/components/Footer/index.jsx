import React, { useState } from 'react';
import Logo from '../../images/logo.png';


export default function Footer() {
    return (
        <footer className="footer p-10 bg-zinc-800 justify-between  text-red-600">
                <img src={Logo} width="50" height="50"  viewBox="0 0 24 24"></img>              
                <p className="text-center p-4">Copyright © 2024 - All right reserved</p>

        </footer>
    )
}
