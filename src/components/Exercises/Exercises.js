import React, { useEffect, useState } from 'react';
import './Exercises.css'
import logo from './atik.png'
import Exercise from '../Exercise/Exercise';

const Exercises = () => {
    const [exercises,setExercises] = useState([]);

    useEffect( () => {
        fetch('data.json')
        .then(res=> res.json())
        .then(data=>setExercises(data))
    }, [])
    return (
        <div className='main-body'>
            
            <div>
                <h2>Select Your Exercise</h2>
                <div className="exercise-container">
                    {
                        exercises.map(exercise => <Exercise key={exercise.id} exercise ={exercise}></Exercise>)
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
                <div className="profile">
                    <img src={logo} alt="" />
                    <div className='name'>
                        <h1>Md Atikul Islam</h1>
                        <p>Dhaka, Bangladesh</p>
                    </div>
                </div>
                <div>
                    <h2>Add A Break</h2>
                    <div className='break-container'>
                    <button className='b-time'>10m</button>
                    <button className='b-time'>20m</button>
                    <button className='b-time'>30m</button>
                    <button className='b-time'>40m</button>
                    </div>
                </div>
                <div>
                    <h2>Exercise Details</h2>
                    <div>
                        <h3 className='ex-time'>Exercise time </h3>
                        <h3 className='ex-time'>Break time </h3>
                    </div>
                </div>
                <div className='complete-btn'>
                    <button>Activity Completed</button>
                </div>
            </div>
        </div>
    );
};

export default Exercises;