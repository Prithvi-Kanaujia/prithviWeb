import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './Component/Layout/Layout';
import Particle from './Component/Layout/particles';
import Home from './Component/Layout/Home'

function App() {
  return (
   <>
   <Layout/>
  <Routes>
    <Route path='/' element = {<Layout/>} />
    <Route index element = {<Home/>}/>
  </Routes>
  <Particle/>
  
  </>
  
  
  );
}

export default App;
