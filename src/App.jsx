import { Route, Routes } from 'react-router-dom';
import { Footer, Header } from './components';
import { BookingPage, Home } from './pages';
import { useReducer } from 'react';


function App() {
  const initializeTimes = () => {
    return {
      times: [
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00'
      ]
    };
  };

  const updateTimes = (state, action) => {
    if (action.type === 'timeSelected') return state;
  };

  const [state, dispatch] = useReducer(updateTimes, initializeTimes);
  
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking"
               element={<BookingPage
                 times={state}
                 handleTimeSelection={() => dispatch({ type: 'timeSelected' })} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
