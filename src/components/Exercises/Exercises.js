import React from 'react';
import './Exercises.css'
import logo from './atik.png'
import Exercise from '../Exercise/Exercise';

const Exercises = () => {
    const exercises = [
        {id:1, name:'Push Up', time:'30m', description:'Push Up is a common calisthenics exercise beginning from the prone position. By raising and lowering the body using the arms, push-ups exercise the pectoral muscles, triceps.', pic:'https://image.shutterstock.com/image-photo/fitness-sport-training-concept-indian-600w-1428376937.jpg'},
        {id:2, name:'Squats', time:'40m', description:'Squats burn calories and might help you lose weight. They also lower your chances of injuring your knees and ankles.', pic:'https://image.shutterstock.com/image-vector/exercise-guide-by-woman-doing-600w-1303854643.jpg'},
        {id:3, name:'Plank', time:'20m', description:'The plank is an isometric core strength exercise that involves maintaining a position similar to a push-up for the maximum possible time.', pic:'https://image.shutterstock.com/image-photo/sport-fitness-healthy-lifestyle-concept-600w-1418433089.jpg'},
        {id:4, name:'Ab crunches', time:'30m', description:'The crunch is an abdominal exercise that works the rectus abdominis muscle.[1] It enables both building "six-pack" abs and tightening the belly.', pic:'https://image.shutterstock.com/image-photo/muscular-man-doing-twist-abs-600w-1713212134.jpg'},
        {id:5, name:'Side Bends', time:'50m', description:'Side bend or Side bending , translated as side bend , is an exercise used in many activities with weights.', pic:'https://image.shutterstock.com/image-photo/sporty-young-man-training-gym-600w-1579727410.jpg'},
        {id:6, name:'Sprinting', time:'10m', description:'Sprinting is running over a short distance at the top-most speed of the body in a limited period of time. It is used in many sports that incorporate running, typically as a way of quickly reaching a target or goal...', pic:'https://image.shutterstock.com/image-photo/istanbul-turkey-february-06-2021-600w-1916129968.jpg'},
    ]

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
                    <h3 className='b-time'>10m</h3>
                    <h3 className='b-time'>20m</h3>
                    <h3 className='b-time'>30m</h3>
                    <h3 className='b-time'>40m</h3>
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