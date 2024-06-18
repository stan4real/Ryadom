import { Outlet } from "react-router-dom";
import './root.css'
import TopMenu from "../../components/layout/topmenu/TopMenu";
import Footer from "../../components/layout/footer/Footer";

export default function Root() {
    
    return ( <>    
    <TopMenu/>
    <Outlet/>
    <Footer/>
    </>
    );
}