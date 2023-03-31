import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import DetailsBeer from './components/DetailsBeer'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/details/:beerId' element={<DetailsBeer/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
