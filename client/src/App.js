import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react';
import Display from './components/Display';
import CreateShow from './components/CreateShow';
import OneShow from './components/OneShow';
import EditShow from './components/EditShow';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

function App() {
  const [tvShowList, setTvShowList] = useState([])
  
  return (
    <div className="App">
      <BrowserRouter>
        <h1>Welcome to our TV Show app</h1>
        <Link to={'/createShow/form'}>Add your favorite show</Link>
        <br />
        <Link to={'/'}>Home</Link>
        <Routes>
          <Route path='/' element={<Display tvShowList={tvShowList} setTvShowList={setTvShowList}/>}/>
          <Route path='/createShow/form' element={<CreateShow/>}/>
          <Route path='/viewShow/:id' element={<OneShow/>}/>
          <Route path='/editShow/:id' element={<EditShow/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
