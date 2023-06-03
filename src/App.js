import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './LandingPage/LandingPage';
import Post from './Post/Post';
import Form from "./Form/Form"

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<LandingPage/>}/>  
        <Route path='/posts' element={<Post/>}/>  
        <Route path='/form' element={<Form/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
