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
        <div className='body' style={mode ? { backgroundColor: "white" } : { backgroundColor: "white" }}>
            <main>
                <section className='app'>

                    <input type="range" />
                    <span>1</span>

                    <div className='input'>
                        <button className='button' onClick={subCount}>-</button>
                        <input className='inputText' type="text" placeholder='Enter value...' />
                        <button className='button' onClick={addCount}>+</button>
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
                        <button onClick={reset} className='reset'>Reset</button>
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
