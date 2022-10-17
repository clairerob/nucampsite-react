import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import Header from './components/Header';
import Footer from './components/Footer';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import AboutPage from './pages/AboutPage';
import { fetchCampsites } from './features/campsites/campsitesSlice';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampsites());
  }, [dispatch]);//React doesn't like if you use a function defined outside of useEffect and don't add it to the dependencies array. it's not strictly necessary but that's what it wants

  return (
    <div className='App'>
      <Header />
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='contact' element={<ContactPage />}/>
          <Route path='directory' element={<CampsitesDirectoryPage />}/>
          <Route path='directory/:campsiteId' element={<CampsiteDetailPage />} />
          <Route path='about' element={<AboutPage />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
