import React, { useEffect, useState } from 'react';
import logo from './atik.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Details = ({details}) => {

    const [breakTime,setBreakTime] = useState(0);

    useEffect( () =>{
        if(breakTime){
            localStorage.setItem('break',breakTime)
        }
        else{
            const saveData = localStorage.getItem('break')
            setBreakTime(saveData)
        }
    },[breakTime])

    const showToast = () =>{
        toast.success("Congratulations! Your activity completed", {
            position:"top-center"
        });
    }

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
                        <button onClick={(e) => setBreakTime(e.target.innerText)} className='b-time'>10m</button>
                        <button onClick={(e) => setBreakTime(e.target.innerText)} className='b-time'>20m</button>
                        <button onClick={(e) => setBreakTime(e.target.innerText)} className='b-time'>30m</button>
                        <button onClick={(e) => setBreakTime(e.target.innerText)} className='b-time'>40m</button>
                        
                    </div>
                </div>
                <div>
                    <h2>Exercise Details</h2>
                    <div className='time'>
                        <h3 className='ex-time'>Exercise time <span>{totaltime}</span> minutes </h3>
                        <h3 className='ex-time'>Break time:{breakTime} </h3>
                    </div>
                </div>
                <div className='complete-btn'>
                    <button onClick={showToast}>Activity Completed</button>
                </div>
                <ToastContainer />
        </div>
    );
};

export default Details;