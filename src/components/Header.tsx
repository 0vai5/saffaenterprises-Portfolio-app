import { NavItems, MobileNav } from ".";
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
