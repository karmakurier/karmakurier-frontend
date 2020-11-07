import classNames from 'classnames/bind'
import React from 'react'
import './Karmakurier.atom.scss'

const Karmakurier = ({ inverted }) => {
    const classes = classNames({
        highlight: true,
        inverted,
    })
    return <div className={classes}>karmakurier</div>
}

export default Karmakurier
