import React, { useState } from "react";
import "./Individual.css";
import { BsChevronExpand } from "react-icons/bs";
const Form = () => {
    const [select, setSelect] = useState('8');
    const [activeElement, setActiveElement] = useState();
    const dropdownActive = (e) => {
        setSelect(e.target.innerHTML);
        if (activeElement) {
            activeElement.target.classList.remove('active');
            e.target.classList.add('active');
        } else {
            e.target.classList.add('active');
        }

        setActiveElement(e)

    }
    return (
        <div className="dropdown">
            <button className="dropbtn justify-s">{select} <BsChevronExpand /> </button>
            <div className="dropdown-content">
                <a href="#" onClick={dropdownActive}>8</a>
                <a href="#" onClick={dropdownActive}>Hover</a>
                <a href="#" onClick={dropdownActive} style={{ color: '#1864AB' }}>Section</a>
                <a href="#" onClick={dropdownActive}>9</a>
            </div>
        </div>
    )
}

export default Form
