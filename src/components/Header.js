import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import "./Header.css";

import Mars from "../mars.png"

export default function Header(props) {
    let scale = 10;
    if (props.size === "sm") scale = 2.5;
    if (props.size === "md") scale = 5;

    const imgwidth = {
        width: `${props.imgWidth * 10}%`
    }

    const size = {
        paddingInline: "2%",
        maxWidth: `${scale * 10}rem`,
        display: "flex",
        width: "100%",
    };


    return (
        <div className='navbar mt-5 w-100 container' style={size}>
            <div className='nav--left'>
                <img src={Mars} alt="none" style={imgwidth} />
            </div>
            <div className='nav--right d-flex' style={{display: "flex"}}>
                <div className="dropdown me-2">
                    <button className="dropbtn">{props.dropTitle}</button>
                    <div className="dropdown-content">
                        <a href="/">Link 1</a>
                        <a href="/">Link 3</a>
                        <a href="/">Link 2</a>
                    </div>
                </div>
                <Button
                    title="hi"
                    backgroundColor="red"
                    borderRadius={11}
                    size="lg"
                />
            </div>
        </div>
    )
}

Header.propTypes = {
    imgWidth: PropTypes.number,
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    dropTitle: PropTypes.string,
}
