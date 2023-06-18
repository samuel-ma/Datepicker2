import { useState } from 'react';
import { MdDarkMode, MdWbSunny } from "react-icons/md";
import './App.css'

function App() {
    // working with state
    const [count, setCount] = useState(0);
    const [mode, setMode] = useState("dark");

    // date function
    const date = new Date();

    // click events
    const addCount = () => {
        setCount(count + 1);
    }

    const subCount = () => {
        setCount(count - 1);
    }

    const inputValue = (e) => {
        e.preventDefault();
        setCount(e.target.value)
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

                    <input min={0} max={10} type="range" style={mode ? {} : { border: "1px solid white" }} value={count} onChange={inputValue} />
                    <span style={mode ? {} : { color: "white" }}>{count}</span>

                    <div className='input'>
                        <button style={mode ? {} : { border: "1px solid white" }} className='button' onClick={subCount}>-</button>
                        <input style={mode ? {} : { border: "1px solid white" }} className='inputText' type="text" value={count} onChange={inputValue} placeholder='Enter value...' />
                        <button style={mode ? {} : { border: "1px solid white" }} className='button' onClick={addCount}>+</button>
                    </div>

                    <section className='output'>
                        {
                            (count === 0)
                                ? <p>Today is {date.setDate(date.getDate() + count)}</p>
                                : (count > 0)
                                    ? <p>{count} days from today is {date.setDate(date.getDate() + count)}</p>
                                    : (count < 0)
                                        ? <p>{Math.abs(count)} days from today was {date.setDate(date.getDate() + count)}</p>
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
