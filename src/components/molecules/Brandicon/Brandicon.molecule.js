import React from 'react'
import Karmakurier from '../../atoms/Karmakurier/Karmakurier.atom'
import Logo from '../../atoms/Logo/Logo.atom'
import './Brandicon.molecule.scss'

const Brandicon = ({ inverted, close }) => {
    return (
        <div className="brandicon">
            <Logo inverted={inverted} close={close} />
            <Karmakurier inverted={inverted} />
        </div>
    )
}

export default Brandicon
