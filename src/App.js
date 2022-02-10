import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import { useState } from 'react';
import SignUp from './components/SignUp';
import Login from './components/Login';

function App() {

  const [alert, setalert] = useState(null)

  

  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          {/* <Alert message='This is my third project'  /> */}
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/signup" element={<SignUp />} />
              <Route exact path="/login" element={<Login />} />
            </Routes>
          </div>
        </Router>

      </NoteState>
    </>
  );
}

export default App;
