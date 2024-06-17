import React, { useState } from 'react'
import './NavbarOne.css'
import { MdCancel } from "react-icons/md";
const NavbarOne = () => {

    const [isActive, setIsActive] = useState(false);

    const handleToggle = () => {
        setIsActive(!isActive)
    }

    return (
        <div className='Navbar'>
            <div className="Logo">
                <img src="https://dsygroup.in/wp-content/uploads/2022/04/DSY-logo.png" alt="" />
            </div>
            <div className={isActive ? `Nav-items-moblie` : `Nav-items`}>
                <p>HOME</p>
                <div className='Divider'></div>
                <p>ABOUT US</p>
                <div className='Divider'></div>
                <p>PROPERTY TYPE</p>

                <div className='Divider'></div>
                <p>CONTACT US</p>
            </div>
            {
                isActive ? <div onClick={() => setIsActive(!isActive)}><  MdCancel/> </div>: <div onClick={handleToggle} className='Navbar-mobile-menu'>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            }

        </div>
    )
}

export default NavbarOne
