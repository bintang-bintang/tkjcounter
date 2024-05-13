import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
    const [counter, setCounter] = useState(0);

    const counterUP = "http://localhost:8000/counter/up";
    const counterDOWN = "http://localhost:8000/counter/down";
    const getCounter = "http://localhost:8000/counter";

    const handleUp = () => {
        axios.put(counterUP).then((response) => {
            setCounter(response.data.data.angka);
        }).catch((error) => {
            console.error(error);
        });
    };

    const handleDown = () => {
        axios.put(counterDOWN).then((response) => {
            setCounter(response.data.data.angka);
        }).catch((error) => {
            console.error(error);
        });
    };

    useEffect(() => {
        axios.get(getCounter).then((response) => {
            setCounter(response.data.data.angka);
        }).catch((error) => {
            console.error(error);
        });
    }, []);

    return (
        <div className='bg-slate-500 h-screen flex justify-center items-center gap-5'>
            <button className='py-2 px-5 rounded bg-slate-400 hover:bg-slate-300'>
                Click {counter}
            </button>
            <button className='py-2 px-5 rounded bg-slate-400 hover:bg-slate-300' onClick={handleUp}>
                Up
            </button>
            <button className='py-2 px-5 rounded bg-slate-400 hover:bg-slate-300' onClick={handleDown}>
                Down
            </button>
        </div>
    );
}

export default Home;
