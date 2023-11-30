import './App.css';
import React from 'react';
import { useState } from 'react';
import logo from "./assets/Logo.png"

export default function App() {
  const [buttonState, setButtonState] = useState([false, false, false, false, false, false]);

  const toggleButtonState = (index) => {
    const states = [...buttonState];
    states[index] = !states[index];
    setButtonState(states);
  }
  return (
    <main className='w-screen h-screen'>
      <section className='p-5 pb-0'>
        <div className='flex'>
          <div><img src={logo} alt="" className='w-16'/></div>
          <h1 className='ml-3 font-semibold w-52'>ROBOTICS AND INTELLIGENT SYSTEM LABORATORY</h1>
        </div>
        <div className='mt-6 px-5'>
          <h1 className='text-center font-bold text-2xl'>UNIVERSAL ROBOT CONTROLLER</h1>
        </div>
      </section>
      <section className='mt-8 px-5 grid grid-cols-2 gap-4 gap-x-2'>
        {
          Array.from({ length: 6 }, (_, index) => {
            return (
              <React.Fragment key={index}>
                <button id={index}
                  className={`w-full h-24 border-[#393737] border-4 rounded-md ${(buttonState[index]) ? "active" : "inactive"}`}
                  value={buttonState[index]}
                  onClick={() => toggleButtonState(index)}
                  style={
                    { WebkitTapHighlightColor: "transparent" }
                  }
                >
                  <p>{`Relay ${index + 1}`}</p>
                </button>
              </React.Fragment>
            )
          })
        }
      </section>
    </main>
  )
}