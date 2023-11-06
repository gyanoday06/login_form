import React from 'react';
import PropTypes from "prop-types";

export default function Button(props) {
    let scale = 1;
    if (props.size === "sm") scale = 0.75;
    if (props.size === "lg") scale = 1.5;

    const style = {
        backgroundColor: props.backgroundColor,
        borderRadius: `${props.borderRadius}px`,
        padding: `${scale * 0.5}rem ${scale * 1}rem`,
    };

    function handleClick(){
        console.log("clicked")
    }

    return (
        <div className='ms-2' onClick={handleClick}>
            <button style={style}>{props.title}</button>
        </div>
    );
}

Button.propTypes = {
    title: PropTypes.string,
    backgroundColor: PropTypes.string,
    borderRadius: PropTypes.number,
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    handleClick: PropTypes.func,
};
