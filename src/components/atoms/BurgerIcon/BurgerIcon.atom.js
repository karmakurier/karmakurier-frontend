import classNames from 'classnames/bind'
import React from 'react'
import './BurgerIcon.atom.scss'

const BurgerIcon = ({ open, onClick, inverted }) => {
    const classes = classNames({
        'burger-menu': true,
        open,
        inverted,
    })

    return (
        <button type="button" onClick={onClick} className={classes}>
            <div className="bar1" key="b1" />
            <div className="bar2" key="b2" />
            <div className="bar3" key="b3" />
        </button>
    )
}

export default BurgerIcon
