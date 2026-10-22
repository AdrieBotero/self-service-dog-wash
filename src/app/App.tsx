import KioskLayout from '../layouts/KioskLayout/KioskLayout';
import WelcomePage from '../pages/WelcomePage/WelcomePage';
import PaymentPage from '../pages/PaymentPage/PaymentPage';
import { useEffect } from 'react';

import { Route, Routes, useNavigate } from "react-router-dom";
import './App.css'
import { WashingSessionPage } from '../pages/WasSessionPage/WashingSessionPage';



function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/', {replace:true})
  }, []);


  return (
    <KioskLayout>
      <Routes>
        <Route path='/' element={<WelcomePage />} />
        <Route path='/payment' element={<PaymentPage />} />
        <Route path='/wash' element={<WashingSessionPage />} />
      </Routes>
    </KioskLayout>
  );

}

export default App
