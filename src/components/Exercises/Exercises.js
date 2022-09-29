import React, { useEffect, useState } from 'react';
import './Exercises.css'

import Exercise from '../Exercise/Exercise';
import Details from '../Details/Details';

const Exercises = () => {
    const [exercises,setExercises] = useState([]);
    const [details,setDetails] = useState([]);

    useEffect( () => {
        fetch('data.json')
        .then(res=> res.json())
        .then(data=>setExercises(data))
    }, []);

    const addToList = (exercise) =>{
        const newdetails = [...details,exercise];
        setDetails(newdetails);
    
    }

    return (
        <div className='main-body'>
            
            <div>
                <h2>Select Your Exercise</h2>
                <div className="exercise-container">
                    {
                        exercises.map(exercise => <Exercise key={exercise.id}
                            exercise ={exercise}
                            addToList={addToList}
                            ></Exercise>)
                    }
                </div>
                <div className='blog'>
                    <h1>Blog</h1>
                   <h3>How react works?</h3>
                   <p>answer:</p>
                   <h3>What is the difference between props and state?</h3>
                   <p>answer:</p>
                   <h3>What is the uses of useEffect without data load?</h3>
                   <p>answer</p>
                </div>
            </div>
            <div className='profile-container'>
                <Details details={details}></Details>
            </div>
        </div>
    );
};

export default Exercises;