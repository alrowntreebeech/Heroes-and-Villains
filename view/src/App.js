import React from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import HomePage from './components/homepage/Homepage';
import './App.css';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={ <HomePage/> }/>
))


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
