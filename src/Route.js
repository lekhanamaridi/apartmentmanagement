import { Route,Routes } from "react-router-dom";
import Home from "./components/Home";
import ApartmentdataDetails from "./components/details/apartment/Apartmentdata";
import Apartmentinsert from "./components/details/apartment/Apartmentinsert";
import Apartmentdelete from "./components/details/apartment/Apartmentdelete";
import Apartmentupdate from "./components/details/apartment/Apartmentupdate";
function Route1()
{
    return(
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/apartment" element={<ApartmentdataDetails></ApartmentdataDetails>}></Route>
            <Route path="/apartment1" element={<Apartmentinsert></Apartmentinsert>}></Route>
            <Route path="/apartment2" element={<Apartmentdelete></Apartmentdelete>}></Route>
            <Route path="/apartment3" element={<Apartmentupdate></Apartmentupdate>}></Route>
        </Routes>
     );
    }
    export default Route1;