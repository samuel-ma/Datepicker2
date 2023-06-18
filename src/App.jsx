import { useState } from 'react';
import { MdDarkMode, MdWbSunny } from "react-icons/md";
import './App.css'

function App() {
    // working with state
    const [count, setCount] = useState(0);
    const [input, setInput] = useState(1);
    const [mode, setMode] = useState("dark");

    // date function
    const date = new Date("June 18 2023");
    date.setDate(date.getDate() + count);

    // click events
    const addCount = () => {
        setCount(count + input);
    }

    const subCount = () => {
        setCount(count - input);
    }

    const inputValue = (e) => {
        e.preventDefault();
        setInput(Number(e.target.value))
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

                    <input min={0} max={10} type="range" style={mode ? {} : { border: "1px solid white" }} value={input} onChange={inputValue} />
                    <span style={mode ? {} : { color: "white" }}>{input}</span>

                    <div className='input'>
                        <button style={mode ? {} : { border: "1px solid white" }} className='button' onClick={subCount}>-</button>
                        <input style={mode ? {} : { border: "1px solid white" }} className='inputText' type="text" value={count} onChange={inputValue} placeholder='Enter value...' />
                        <button style={mode ? {} : { border: "1px solid white" }} className='button' onClick={addCount}>+</button>
                    </div>

                    <section className='output'>
                        {
                            (count === 0)
                                ? <p>Today is {date.toDateString()}</p>
                                : (count > 0)
                                    ? <p>{count} days from today is {date.toDateString()}</p>
                                    : (count < 0)
                                        ? <p>{Math.abs(count)} days from today was {date.toDateString()}</p>
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
