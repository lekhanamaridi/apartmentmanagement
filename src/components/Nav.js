import { Link } from 'react-router-dom';
import './Nav.css';
function Nav()
{
    return(
        <div  className='navbar'>
            <div className="background">
                <div>
                    <h1 className='head'><i>APARTMENT DATABASE</i></h1>
                </div>
                <div className='sidenav'>
                    <h2 className='text1'>HOME</h2>
                    <h2 className='text2'>Block</h2>
                    <Link to='/apartment'>
                            <h2 className='text3'>Apartment</h2>
                    </Link>
                    <h2 className='text4'>Owner</h2>
                    <h2 className='text5'>Tenant</h2>
                </div>
            </div>
        </div>
    );
}
export default Nav;