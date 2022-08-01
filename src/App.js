import './App.css'
import { useState } from 'react'
import Title from './components/Title'
import Modal from './components/Modal'
import EventList from './components/EventList'

function App() {  
  const [showModal, setShowModal] = useState(false)
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
    {title:"Steve doing this finally", id: 1},
    {title:"Upskilling is the goal", id: 2},
    {title:"I will complete this course", id: 3}
  ])
  console.log(showModal);

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      })
    })
    console.log(id)
  }

 
  const handleClose = () => {
    setShowModal(false)
  }

  const subtitleConst = "All the latest events in Marioland"

  return(
    <div className='App'>
     
       <Title title="Events in your area" subtitle={subtitleConst}/>

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

      {showEvents && <EventList events={events} handleClick={handleClick} />}

   
       {showModal && <Modal handleClose={handleClose} isSalesModal={true}>
          <h2>Terms and Conditions</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error odit nam et reprehenderit quibusdam temporibus officia dolorum quo sint nemo quis, laborum, quasi nisi fugit praesentium debitis repudiandae! Sapiente, omnis.</p>
        </Modal>
       }

      <div>
        <button onClick={() => setShowModal(true)}>Show Modal</button>
      </div>
    </div>
  )
}

export default App;
