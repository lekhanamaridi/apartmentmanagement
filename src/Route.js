import { Route,Routes } from "react-router-dom";
import Home from "./components/Home";
import ApartmentdataDetails from "./components/details/apartment/Apartmentdata";
import Apartmentinsert from "./components/details/apartment/Apartmentinsert";
function Route1()
{
    return(
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/apartment" element={<ApartmentdataDetails></ApartmentdataDetails>}></Route>
            <Route path="/apartment1" element={<Apartmentinsert></Apartmentinsert>}></Route>
        </Routes>
     );
    }
    export default Route1;