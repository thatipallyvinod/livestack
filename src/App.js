import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import AnimalList from './Components/AnimalManagement/AnimalList';
import AnimalProfile from './Components/AnimalManagement/AnimalProfile';
import AddEditAnimal from './Components/AnimalManagement/AddEditAnimal';
import HealthRecords from './Components/HealthManagement/HealthRecords';
import HealthAlerts from './Components/HealthManagement/HealthAlerts';
import Dashboard from './Components/Dashboard/Dashboard';
import SalesRecords from './Components/FinancialManagement/SalesRecords';
import FinancialReports from './Components/FinancialManagement/FinancialReports';
import ExpenseTracking from './Components/FinancialManagement/ExpenseTracking';
import Login from './Components/Auth/Login';
import PasswordRecovery from './Components/Auth/PasswordRecovery';

import InventoryItem from './Components/Inventory/InventoryItem';
import InventoryForm from './Components/Inventory/InventoryForm';
import InventoryList from './Components/Inventory/InventoryList';
import BreedingCalendar from './Components/Breeding/BreedingCalendar';
import BreedingRecords from './Components/Breeding/BreedingRecords';
import CustomReports from './Components/Reports/CustomReports';
import UserManagement from './Components/Settings/UserManagement';
import SystemSettings from './Components/Settings/SystemSettings';
import Welcome from './Components/Welcome/Welcome';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/animallist" element={<AnimalList />} />
        <Route path="/animalprofile/:id" element={<AnimalProfile />} />
        <Route path="/addeditanimal" element={<AddEditAnimal />} />
        <Route path="/healthrecords" element={<HealthRecords />} />
        <Route path="/healthalerts" element={<HealthAlerts />} />
        <Route path="/passwordrecovery" element={<PasswordRecovery />} />
        <Route path="/login" element={<Login />} />
        <Route path="/expensetracking" element={<ExpenseTracking />} />
        <Route path="/financialreports" element={<FinancialReports />} />
        <Route path="/salesrecords" element={<SalesRecords />} />
        <Route path="/BreedingRecords" element={<BreedingRecords />} />
        <Route path="/BreedingCalendar" element={<BreedingCalendar />} />
        <Route path="/InventoryList" element={<InventoryList />} />
        <Route path="/InventoryForm" element={<InventoryForm/>} />
        <Route path="/InventoryItem" element={<InventoryItem />} />
        <Route path="/CustomReports" element={<CustomReports />} />
        <Route path="/UserManagement" element={<UserManagement />} />
        <Route path="/SystemSettings" element={<SystemSettings />} />
      </Routes>
    </div>
  );
}

export default App;
