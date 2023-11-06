import React from 'react';
import PropTypes from 'prop-types';

export default function Cards(props) {
  const numberOfCards = props.number;

  const style = {
    width: `${props.width * 5}rem`
  };

  const cardComponents = [];

  for (let i = 0; i < numberOfCards; i++) {
    cardComponents.push(
      <div key={i} className="card mt-4 ms-2" style={style}>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.desc}</p>
          <a href="/" className="btn btn-primary">{props.btndes}</a>
        </div>
      </div>
    );
  }

  return <div className='d-flex container mb-5' style={{justifyContent: "space-evenly", flexWrap: "wrap"}}>{cardComponents}</div>;
}

Cards.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  btndes: PropTypes.oneOf(["Go Somewhere", "Click Me", "Go"]),
  width: PropTypes.number,
  number: PropTypes.number.isRequired,
}
