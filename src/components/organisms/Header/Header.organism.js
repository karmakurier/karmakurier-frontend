import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import BurgerIcon from '../../atoms/BurgerIcon/BurgerIcon.atom'
import Logo from '../../atoms/Logo/Logo.atom'
import Menu from '../../pages/Menu/Menu.page'
import './Header.organism.scss'

const Header = () => {
    const [open, setOpen] = useState(false)

    return (
        <header>
            <Logo inverted={open} close={() => setOpen(false)} />
            <div className="actions">
                <Link to="/login">
                    <i className="icon-enter" />
                    &nbsp;Anmelden
                </Link>
                <Link to="/register">
                    <i className="icon-users" />
                    &nbsp;Registrieren
                </Link>
            </div>
            <BurgerIcon
                onClick={() => {
                    setOpen(!open)
                }}
                open={open}
                inverted={open}
            />
            <Menu visible={open} close={() => setOpen(false)} />
        </header>
    )
}

export default Header
