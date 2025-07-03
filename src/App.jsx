import Routes from "./routes/Routes.jsx";
import { ToastContainer } from "react-toastify";

function App() {
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
