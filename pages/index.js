"use client";

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react';
import { ArrowDown } from './arrowdown';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectValue, setSelectValue] = useState("option 1")

  const updateValue = (value) => {
    setSelectValue(value)
    setIsOpen(false)
  }
  return (
    <div>
      <h1>This is a title</h1>
      <h2>This is a subtitle</h2>
      <p className='text-base'>This is a paragraph</p>
      <a href='https://freecodecamp.org'>This is an anchor</a>
      <div className='my-4'>
        <button className='btn btn-primary'>This is a button</button>
      </div>
      <div className='my-4'>
        <button className='btn btn-secondary'>This is a button</button>
      </div>
      <div className='my-4'>
        <button disabled className='btn'>This is a button</button>
      </div>
      <div>
        <input type='text' placeholder='Email'/>
      </div>
      <div>
        <input type='date'/>
      </div>
      <div>
        <input disabled type='text' placeholder='Email'/>
      </div>
      <div>
        <input type='checkbox' id='checkbox'/>
        <label for='checkbox'>Checkbox</label>
      </div>
      <div>
        <select>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
      </div>

      <div className='Select'>
        <div className='flex itemchild' onClick={() => setIsOpen(!isOpen)}>
          <span>{selectValue}</span>
          <div className={isOpen ? 'rotate-180 transition': 'rotate-0 transition'}>
          <ArrowDown/>

          </div>
        </div>
        {isOpen && (
          <div> 
            <ul className='flex flex-col border-t divide-y'>
              <li className='child'onClick={() => updateValue('Option 1')}>Option 1</li>
              <li className='child' onClick={() => updateValue('Option 2')}>Option 2</li>
              <li className='child' onClick={() => updateValue('Option 3')}>Option 3</li>
            </ul>
          </div>
        )}
      </div>
      {/* <h1>This is a title</h1>
      <h2>This is a subtitle</h2> */}
    
    </div>
  )
}
