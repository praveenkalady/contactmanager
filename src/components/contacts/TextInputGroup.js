import React from 'react';
import classnames from 'classnames';

function TextInputGroup({ label,name,placeholder,value,onChange,type,error }) {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input onChange={onChange} type={type} name={name} className={classnames('form-control form-control-lg',{ 'is-invalid':error })} placeholder={placeholder} value={value} />
            {error && <div className="invalid-feedback">{error}</div> }
        </div> 
    )
}

export default TextInputGroup;
