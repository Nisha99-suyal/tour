import Tours from './components/Tours';
import data from './data';
import './App.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function App() {
  const [tours, setTours] = useState(data);
  function removeTour(id){
    const newTours = tours.filter(tour=>tour.id!==id);
    setTours(newTours);
  }

  if(tours.length===0){
    return(
      <div className='no-tour'>
        <h4 className='py-2'>No tour left</h4>
        <Button className='refresh' variant='outline-primary' onClick={()=>setTours(data)}>Refresh</Button>
      </div>
    )
  }
  
  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  );
}

export default App;
