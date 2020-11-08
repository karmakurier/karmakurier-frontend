import TextField from '@material-ui/core/TextField'
import classNames from 'classnames/bind'
import React from 'react'
import './KarmakurierTextfield.atom.scss'

const KarmakurierTextfield = ({ id, label, value, onChange, textfield }) => {
    const classes = classNames('inputclass', `form-${id}`, textfield ? 'multiline' : 'singleline')

    return (
        <TextField
            className={classes}
            id={id}
            label={label}
            variant="outlined"
            value={value}
            onChange={onChange}
            multiline={textfield}
            fullWidth
        />
    )
}

export default KarmakurierTextfield
