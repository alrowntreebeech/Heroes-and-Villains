import React from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Root from './components/root/Root';
import HomePage from './components/homepage/Homepage';
import LogInPage from './components/logInPage/LogInPage';
import SignUpPage from './components/signUpPage/SignUpPage';
import './App.css';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={ <Root/> }>
    <Route index element={ <HomePage/> } />
    <Route path='/login' element={ <LogInPage/> } />
    <Route path='/register' element={ <SignUpPage/> } />
  </Route>
))


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
