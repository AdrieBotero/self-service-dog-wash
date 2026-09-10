import KioskLayout from '../layouts/KioskLayout/KioskLayout';
import WelcomePage from '../pages/WelcomePage/WelcomePage';
import PaymentPage from '../pages/PaymentPage/PaymentPage';
import { useEffect } from 'react';

import { Route, Routes, useNavigate } from "react-router-dom";
import './App.css'



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
      </Routes>
    </KioskLayout>
  );

}

export default App
