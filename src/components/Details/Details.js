import React from 'react';
import logo from './atik.png'

const Details = ({details}) => {

    let totaltime = 0;
    for(const time of details){
        totaltime =totaltime + time.time;
    }


    return (
        <div className='details'>
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
                    <div className='time'>
                        <h3 className='ex-time'>Exercise time <span>{totaltime}</span> minutes </h3>
                        <h3 className='ex-time'>Break time </h3>
                    </div>
                </div>
                <div className='complete-btn'>
                    <button>Activity Completed</button>
                </div>
        </div>
    );
};

export default Details;