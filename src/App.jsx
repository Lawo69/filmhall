import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Routes from "./routes/Routes.jsx";
import { ToastContainer } from "react-toastify";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50
    });
  }, []);

  const toastStyle = {
    fontSize: '0.8rem'
  };
  return (
    <div className="h-min-screen">
      <ToastContainer style={toastStyle} />
      <Routes />
    </div>
  );
}

export default App;
