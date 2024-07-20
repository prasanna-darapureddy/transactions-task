import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllTransactions from './components/AllTransactions';
import RecentTransactions from './components/recentTransaction/RecentTransactions';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RecentTransactions />} />
        <Route path='/AllTransactions' element={<AllTransactions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
