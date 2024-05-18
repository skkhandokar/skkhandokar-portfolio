import { Outlet } from "react-router-dom";
import Footer from './../Components/Footer/Footer';



const Main = () => {
  return (
    <div>

      <Outlet />
      <Footer/>
    </div>
  );
};

export default Main;
