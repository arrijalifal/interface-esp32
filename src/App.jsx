import './App.css';
import React from 'react';

export default function App() {
  return (
    <main className='w-screen h-screen'>
      <section className='p-5 pt-10 h-48'>
        <div className='h-full bg-blue-400 rounded-xl p-4'>
          <h1>Lorem ipsum, dolor sit amet</h1>
        </div>
      </section>
      <section className='px-5 pt-10 grid grid-cols-2 gap-2'>
        {
          Array.from({ length: 6 }, (_, index) => {
            return (
              <React.Fragment key={index}>
                <div className="w-full h-12 border border-black rounded-xl">
                  <p></p>
                </div>
              </React.Fragment>
            )
          })
        }
      </section>
    </main>
  )
}