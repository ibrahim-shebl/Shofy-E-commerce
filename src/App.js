import logo from './logo.svg';
import './App.css';
import Session from './components/session/Session';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SessionDetails from './components/session/SessionDetails';

function App() {
  return (
     <BrowserRouter>
        <Routes>
         <Route path='/' element={<Session />} />
         <Route path='/details' element={<SessionDetails />} />
        </Routes>
        
     </BrowserRouter>
  );
}

export default App;
