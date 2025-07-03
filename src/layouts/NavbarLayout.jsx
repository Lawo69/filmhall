import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

const NavbarLayout = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Navbar */}
      <Navbar/>

      {/* Content */}
      <main className="flex-1">
        <Outlet/>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default NavbarLayout;
