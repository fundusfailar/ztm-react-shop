import { Link, Outlet } from "react-router";
import Logo from '../../assets/crown.svg';


const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Logo /> 
        </Link>
        <div className="nav-link-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
