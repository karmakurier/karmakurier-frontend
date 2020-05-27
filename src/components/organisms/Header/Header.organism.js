import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import BurgerIcon from '../../atoms/BurgerIcon/BurgerIcon.atom'
import Logo from '../../atoms/Logo/Logo.atom'
import Menu from '../../pages/Menu/Menu.page'
import './Header.organism.scss'

const Header = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className="header">
            <Logo inverted={open} />
            <div className="actions">
                <Link to="/login">Anmelden</Link>
                <Link to="/register">Registrieren</Link>
            </div>
            <BurgerIcon
                onClick={() => {
                    setOpen(!open)
                }}
                open={open}
                inverted={open}
            />
            <Menu visible={open} close={() => setOpen(false)} />
        </div>
    )
}

export default Header
