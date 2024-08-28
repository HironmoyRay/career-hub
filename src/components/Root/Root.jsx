import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
const Root = () => {
  return (
    <div className="flex flex-col h-screen bg-red-600 justify-start">
      <Header></Header>
      <Outlet className=''></Outlet>
      <Footer className=''></Footer>
    </div>
  );
};

export default Root;
