import MobileNav from "./MobileNav";
import NavItems from "./NavItems";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div>
      <NavLink
        to="/"
      >
        <h2 className="subhead-text">Saffa<br /><span className={'text-[#1065DC]'}>Enterprises</span></h2>
      </NavLink>
      </div>
      <nav className="hidden md:block">
        <NavItems />
      </nav>
      <MobileNav />
      
    </header>
  );
};

export default Header;
