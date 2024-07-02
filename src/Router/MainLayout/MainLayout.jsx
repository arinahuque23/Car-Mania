import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
const MainLayout = () => {
    return (
        <div className=" ">
            <Navbar></Navbar>
            <div>
            <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default MainLayout;