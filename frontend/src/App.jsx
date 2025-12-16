import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DeviceList from './components/DeviceList'
import DeviceDetails from './components/DeviceDetails'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DeviceList />} />
        <Route path="/device/:id" element={<DeviceDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App