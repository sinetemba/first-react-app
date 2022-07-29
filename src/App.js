import { useState } from 'react';
import './App.css';
import Title from './components/Title';

function App() {  
  const [showEvents, setShowEvents] = useState(true)
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
       <Title/>

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
