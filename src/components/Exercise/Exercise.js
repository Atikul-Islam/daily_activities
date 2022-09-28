import React from 'react';
import './Exercise.css'
import logo from './atik.png'

const Exercise = () => {
    return (
        <div className='main-body'>
            <div className="exercise-container">
                <h2>Select Your Exercise</h2>
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

export default Exercise;