import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import StaffManagement from './pages/StaffManagement';
import MenuManagement from './pages/MenuManagement';
import Reservations from './pages/Reservations';
import Orders from './pages/Orders';
import Inventory from './pages/Inventory';
import Tables from './pages/Tables';
import Reports from './pages/Reports';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="staff" element={<StaffManagement />} />
          <Route path="menu" element={<MenuManagement />} />
          <Route path="reservation" element={<Reservations />} />
          <Route path="orders" element={<Orders />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="tables" element={<Tables />} />
          <Route path="reports" element={<Reports />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;