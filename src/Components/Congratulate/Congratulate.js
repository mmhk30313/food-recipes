import React from 'react';
import image from './giphy.gif';
import './Congratulate.css';
const Congratulate = (props) => {
    // console.log("Congratulations")
    const afterCongratulate = props.afterCongratulate;
    return (
        <div className="text-center congratulate">
            <h1>Congratulations!!!</h1>
            <img src={image} alt=""/><br/>
            <button onClick={() => afterCongratulate(true)} className="btn btn-info">BACK</button>
        </div>
    );
};

export default Congratulate;