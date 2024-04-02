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
        <img src="./saffaenterprises.png" alt="logo" className="h-32 w-32"/>
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
