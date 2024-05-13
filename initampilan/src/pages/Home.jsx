import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
    const [counter, setCounter] = useState(0);
    const [isConnected, setIsConnected] = useState(true); // State to track connection status
    const [counterLocal, setCounterLocal] = useState(0);

    const getCounter = "http://localhost:8000/counter";
    const counterUP = "http://localhost:8000/counter/up";
    const counterDOWN = "http://localhost:8000/counter/down";

    const handleUp = () => {
        axios.put(counterUP).then((response) => {
            // setCounter(response.data.data.angka);
            window.location.reload()
        }).catch((error) => {
            console.error(error);
            // setIsConnected(false); // Set connection status to false on error
        });
    };

    const handleDown = () => {
        axios.put(counterDOWN).then((response) => {
            // setCounter(response.data.data.angka);
            window.location.reload()
        }).catch((error) => {
            console.error(error);
            // setIsConnected(false); // Set connection status to false on error
        });
    };

    useEffect(() => {
        axios.get(getCounter).then((response) => {
            setCounter(response.data.data.angka);
            setIsConnected(true); // Set connection status to true on success
        }).catch((error) => {
            console.error(error);
            setIsConnected(false); // Set connection status to false on error
        });
    }, []);

    const handleUpLocal = () => {
        setCounterLocal(counterLocal + 1);
    };

    const handleDownLocal = () => {
        setCounterLocal(counterLocal - 1);
    };

    if (!isConnected) {
        return (
            <div className='bg-slate-500 h-screen flex flex-col justify-center items-center gap-5'>
                <h1 className='text-white'>Belum tersambung ke database!</h1>
                <div className="gap-5">
                    <button className='py-2 px-5 rounded bg-slate-400 hover:bg-slate-300'>
                        Click {counterLocal}
                    </button>
                    <button className='py-2 px-5 rounded bg-slate-400 hover:bg-slate-300' onClick={handleUpLocal}>
                        Up
                    </button>
                    <button className='py-2 px-5 rounded bg-slate-400 hover:bg-slate-300' onClick={handleDownLocal}>
                        Down
                    </button>
                </div>
            </div>
        );
    }
    return (
        <div className='bg-slate-500 h-screen flex flex-col justify-center items-center gap-5'>
            <h1 className='text-white'>Tersambung ke database!!!!!</h1>
            <div className="">
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
        </div>
    );


}

export default Home;
