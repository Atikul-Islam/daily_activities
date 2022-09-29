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
                   <p>While building client-side apps, a team of Facebook developers realized that the DOM is slow (The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.). So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM.
                    Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it’s worth keeping a DOM tree in it to speed up its manipulation.
                    Although React was conceived to be used in the browser, because of its design it can also be used in the server with Node.js.</p>
                   <h3>What is the difference between props and state?</h3>
                   <p>Props: <br />
                    The Data is passed from one component to another. <br />
                    It is Immutable (cannot be modified).	<br />
                    Props can be used with state and functional components. <br />	
                    Props are read-only. <br /> <br />

                    State: <br />
                    The Data is passed within the component only. <br />
                    It is Mutable ( can be modified). <br />
                    State can be used only with the state components/class component (Before 16.0). <br />
                    State is both read and write. </p>
                   <h3>What is the uses of useEffect without data load?</h3>
                   <p>Running once on mount: fetch API data <br />
                    Running on state change: validating input field <br />
                     Running on state change: live filtering <br />
                    Running on state change: trigger animation on new array value <br />
                    Running on props change: update paragraph list on fetched API data update <br />
                    Running on props change: updating fetched API data to get BTC updated price <br /> </p>
                </div>
            </div>
            <div className='profile-container'>
                <Details details={details}></Details>
            </div>
        </div>
    );
};

export default Exercises;