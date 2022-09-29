import React from 'react';
import './Exercise.css'

const Exercise = ({addToList,exercise}) => {
    const {pic,name,description,time}=exercise;

    return (
        <div className='exercise-card'>
            <img src={pic} alt="" />
            <h1>{name}</h1>
            <p>{description}</p>
            <h3>Time: <span> {time}</span>min</h3>
            <button onClick={()=> addToList(exercise)}>Add to list</button>
        </div>
    );
};

export default Exercise;