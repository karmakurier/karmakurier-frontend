import React from 'react'
import { Link } from 'react-router-dom'
import Karmakurier from '../../atoms/Karmakurier/Karmakurier.atom'
import Logo from '../../atoms/Logo/Logo.atom'
import './Brandicon.molecule.scss'

const Brandicon = ({ inverted, close }) => {
    return (
        <Link to="/" onClick={close}>
            <div className="brandicon">
                <Logo inverted={inverted} />
                <Karmakurier inverted={inverted} />
            </div>
        </Link>
    )
}

export default Brandicon
