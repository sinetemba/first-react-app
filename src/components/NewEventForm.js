import React from 'react'
import './NewEventForm.css'
import {useState, useRef} from 'react';

export default function NewEventForm({addEvent}) {

  // const [title, setTitle] = useState('')
  // const [date, setDate] = useState('')
  const title = useRef()
  const date = useRef()

  const resetForm = () =>{

    title.current.value = "";
    date.current.value = "";
    // setTitle('')
    // setDate('')
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(title.current.value, date.current.value)

    const event = {
        title: title.current.value,
        date: date.current.value,
        id: Math.floor(Math.random() * 10000)
    }
    addEvent(event)
    resetForm()
  }


  return (
    <form className="new-event-form" onSubmit={handleSubmit}>
        <label>
            <span>Event Title:</span> 
            <input type="text" 
             ref={title}
             />
        </label>

        <label>
            <span>Event Date:</span> 
            <input type="date" 
            ref={date}
            />
        </label>
        <button>Submit</button>      
    </form>
  )
}
