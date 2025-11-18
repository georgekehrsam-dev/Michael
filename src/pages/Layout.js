import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar.js';

export default function Layout() {
  return (
    <>
      <NavBar name="George Ehrsam" linkedInProfileURL= "https://linkedin.com/"/>
      {/* Outlet is where child routes get rendered */}
      <Outlet />
    </>
  );
}