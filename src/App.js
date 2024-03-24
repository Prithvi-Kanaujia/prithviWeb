import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './Component/Layout/Layout';
import Particle from './Component/Layout/particles';
import Home from './Component/Layout/Home'
import About from './Component/Layout/About'

function App() {
  return (
   <>
   <Layout/>
  <Routes>
    <Route path='/' element = {<Layout/>} />
    <Route path='/about' element = {<About/>} />
    <Route index element = {<Home/>}/>
    <Route path='/prithviWeb' element = {<Home/>} />

  </Routes>
  <Particle/>
  
  </>
  
  
  );
}

export default App;
