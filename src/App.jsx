import { useState } from 'react';
import { MdDarkMode, MdWbSunny } from "react-icons/md";
import './App.css'

function App() {
    // working with state
    const [count, setCount] = useState(0);
    const [mode, setMode] = useState("dark");

    // date function
    const date = new Date().toDateString();

    // click events
    const addCount = () => {
        setCount(count + 1);
    }

    const subCount = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }

    const darkMode = () => {
        setMode(!mode);
    }

    return (
        <div className='body'>
            <main style={mode ? {} : { background: "linear-gradient(to left, #ff00cc, #333399)", border: "1px solid white" }}>
                <section className='app'>

                    <input type="range" style={mode ? {} : { border: "1px solid white" }} />
                    <span style={mode ? {} : { color: "white" }}>1</span>

                    <div className='input'>
                        <button style={mode ? {} : { border: "1px solid white" }} className='button' onClick={subCount}>-</button>
                        <input style={mode ? {} : { border: "1px solid white" }} className='inputText' type="text" placeholder='Enter value...' />
                        <button style={mode ? {} : { border: "1px solid white" }} className='button' onClick={addCount}>+</button>
                    </div>

                    <section className='output'>
                        {
                            (count === 0)
                                ? <p>Today is {date}</p>
                                : (count > 0)
                                    ? <p>{count} days from today is {date}</p>
                                    : (count < 0)
                                        ? <p>{Math.abs(count)} days from today was {date}</p>
                                        : null
                        }
                        <button style={mode ? {} : { border: "1px solid white" }} onClick={reset} className='reset'>Reset</button>
                    </section>
                </section>
            </main>

            <section className='dark' onClick={darkMode}>
                {
                    mode ? <MdDarkMode /> : <MdWbSunny />
                }
            </section>
        </div>
    )
}

export default App
