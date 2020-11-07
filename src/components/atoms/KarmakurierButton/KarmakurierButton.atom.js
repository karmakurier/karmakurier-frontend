import Button from '@material-ui/core/Button'
import classNames from 'classnames/bind'
import React from 'react'
import './KarmakurierButton.atom.scss'

const KarmakurierButton = ({ label, variant, link, onClick }) => {
    const classes = classNames('buttonclass', variant)
    const btnType = variant === 'outlined' ? 'outlined' : 'contained'

    return (
        <div className={classes}>
            <Button variant={btnType} href={link} variantonClick={onClick}>
                {label}
            </Button>
        </div>
    )
}

export default KarmakurierButton
