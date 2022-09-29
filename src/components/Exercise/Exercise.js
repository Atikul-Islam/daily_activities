import React from 'react';
import './Exercise.css'

const Exercise = (props) => {
    const {pic,name,description,time}=props.exercise;

    return (
        <div className='exercise-card'>
            <img src={pic} alt="" />
            <h1>{name}</h1>
            <p>{description}</p>
            <h3>Time:{time}</h3>
            <button>Add to list</button>
        </div>
    );
};

export default Exercise;