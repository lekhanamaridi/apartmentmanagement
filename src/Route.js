import { Route,Routes } from "react-router-dom";
import Home from "./components/Home";
import ApartmentdataDetails from "./components/details/apartment/Apartmentdata";
import Apartmentinsert from "./components/details/apartment/Apartmentinsert";
import Apartmentdelete from "./components/details/apartment/Apartmentdelete";
import Apartmentupdate from "./components/details/apartment/Apartmentupdate";
import BlockdataDetails from "./components/details/block/Blockdata";
import Blockinsert from "./components/details/block/Blockinsert";
import Blockdelete from "./components/details/block/Blockdelete";
import Blockupdate from "./components/details/block/Blockupdate";
import OwnerdataDetails from "./components/details/owner/Ownerdata";
import Ownerinsert from "./components/details/owner/Ownerinsert";
import Ownerdelete from "./components/details/owner/Ownerdelete";
import Ownerupdate from "./components/details/owner/Ownerupdate";
import TenantdataDetails from "./components/details/tenant/Tenantdata";
import Tenantinsert from "./components/details/tenant/Tenantinsert";
import Tenantdelete from "./components/details/tenant/Tenantdelete";
import Tenantupdate from "./components/details/tenant/Tenantupdate";
function Route1()
{
    return(
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/apartment" element={<ApartmentdataDetails></ApartmentdataDetails>}></Route>
            <Route path="/apartment1" element={<Apartmentinsert></Apartmentinsert>}></Route>
            <Route path="/apartment2" element={<Apartmentdelete></Apartmentdelete>}></Route>
            <Route path="/apartment3" element={<Apartmentupdate></Apartmentupdate>}></Route>
            <Route path="/block" element={<BlockdataDetails></BlockdataDetails>}></Route>
            <Route path="/block1" element={<Blockinsert></Blockinsert>}></Route>
            <Route path="/block2" element={<Blockdelete></Blockdelete>}></Route>
            <Route path="/block3" element={<Blockupdate></Blockupdate>}></Route>
            <Route path="/owner" element={<OwnerdataDetails></OwnerdataDetails>}></Route>
            <Route path="/owner1" element={<Ownerinsert></Ownerinsert>}></Route>
            <Route path="/owner2" element={<Ownerdelete></Ownerdelete>}></Route>
            <Route path="/owner3" element={<Ownerupdate></Ownerupdate>}></Route>
            <Route path="/tenant" element={<TenantdataDetails></TenantdataDetails>}></Route>
            <Route path="/tenant1" element={<Tenantinsert></Tenantinsert>}></Route>
            <Route path="/tenant2" element={<Tenantdelete></Tenantdelete>}></Route>
            <Route path="/tenant3" element={<Tenantupdate></Tenantupdate>}></Route>
        </Routes>
     );
    }
    export default Route1;