import { Route, Routes } from 'react-router-dom';
import { Footer, Header } from './components';
import { BookingPage, Home } from './pages';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
