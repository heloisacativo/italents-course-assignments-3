import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import { HomePage } from './pages/HomePage';
import { TripsPage } from './pages/TripsPage';
import { useState } from 'react';

function App() {

  const [trips, setTrips] = useState([]);

    const handleAddTrip = (trip) => {
        setTrips((prevTrips) => [...prevTrips, trip]);
        console.log("Nova viagem adicionada:", trip);
    };

  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage onAddTrip={handleAddTrip} />}/>
        <Route path="/my-trips" element={<TripsPage trips={trips}/>}/>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
