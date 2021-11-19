import logo from './logo.svg';
import './App.css';
import Dashboard from './layouts/Customer/Dashboard';
import { Route, Routes } from 'react-router';
import AdminDashboard from './layouts/Admin/AdminDashboard';
import Brands from './components/Customer/Brands';
import Cars from './components/Customer/Cars';
import Rentals from './components/Admin/Rentals';
import { Container } from '@mui/material';
import SignIn from './components/Auth/SignIn';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <ToastContainer hideProgressBar autoClose={3500} />
      <Routes>
        <Route path='/' element={<Dashboard />}>
          <Route path='cars' element={<Cars />} />
          <Route path='brands' element={<Brands />} />
        </Route>
        <Route path='/admin' element={<AdminDashboard />}>
          <Route path='rentals' element={<Rentals />} />
        </Route>
        <Route path='/auth' element={<SignIn />}>
          {/* <Route path='rentals' element={<Rentals />} /> */}
        </Route>

      </Routes>

    </div>
  );
}

export default App;
