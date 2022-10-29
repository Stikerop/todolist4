import React from "react";
import './Custominput.css';

const Custominput = ({
        placeholder,
        handleChange,
        value,
        fieldName
}) => {
    return (
        <input
            placeholder={placeholder}
               onChange={(e) => handleChange(e, fieldName )}
               value={value}
        />
    )
}

export default Custominput;