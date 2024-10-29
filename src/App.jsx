import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegisterForm from './pages/HomePage/components/RegisterForm';
import Dashboard from './pages/Dashboard';
import LoginForm from './pages/HomePage/components/LoginForm';
import Sidebar from './pages/Dashboard/components/Sidebar';
import Overview from './pages/Overview';
import EntryForm from './pages/Dashboard/components/EntryForm';
import AllEntries from './pages/Dashboard/components/AllEntries';


function App() {

  const router = createBrowserRouter([
{
  path: '/',
  element: <HomePage />
},
{
  path: '/signup',
  element: <RegisterForm />
},
{
  path: '/login',
  element: <LoginForm />
},
{
  path: '/dashboard',
  element: <Dashboard />
},
{
  path: '/entryform',
  element: <EntryForm />
},
{
  path: '/entries',
  element: <AllEntries />
},
{
  path: '/sidebar',
  element: <Sidebar />
},
{
  path: '/overview',
  element: <Overview />
},
  ])
  

  return <RouterProvider router={router} />;
}

export default App
