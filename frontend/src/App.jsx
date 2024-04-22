import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
// import Footer from "./Ui/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
