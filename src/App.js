import { useState } from 'react';
import './App.css';

function App() {
  //1. hooks must always be called at the top level of the component 
  //2. must be using within a scope of the react component
  const [showEvents, setShowEvents] = useState(true) //boolean state
  const [events, setEvents] = useState([
    {title:"Steve doing this finally", id: 1},
    {title:"Upskilling is the goal", id: 2},
    {title:"I will complete this course", id: 3}
  ])

  console.log(showEvents);
  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      })
    })
    console.log(id)
  }

  return(
    <div className='App'>

      {showEvents && (
      <div>
          <button onClick={() => setShowEvents(false)}>hide events</button>
      </div>
      )}

      {!showEvents && (
      <div>
        <button onClick={() => setShowEvents(true)}>show events</button>
      </div>
       )}

      {showEvents && events.map((event, index) =>
        <div key={event.id}>
          <h2>{index} - {event.id} -  {event.title}</h2>
         <button onClick={() => handleClick(event.id)}> delete event</button>
        </div>
      )}
    </div>
  )
}

export default App;
