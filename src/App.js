import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  Home,
  Contact,
  Expertise,
  Showcase,
  NoMatch,
  Solutions,
  Form,
  Recommend,
  Bot,
  Motion
} from './routes';
import NavBar from './components/NavBar';

function App() {
  return (
    <Routes>
      <Route path='/' element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path='expertise' element={<Expertise />} />
        <Route path='solutions' element={<Solutions />} />
        <Route path='showcase' element={<Showcase />} />
        <Route path='contact' element={<Contact />} />
        <Route path='solutions/form' element={<Form />} />
        <Route path='solutions/recommend' element={<Recommend />} />
        <Route path='solutions/bot' element={<Bot />} />
        <Route path='solutions/motion' element={<Motion />} />
        <Route path='*' element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
