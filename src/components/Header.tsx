import MobileNav from "./MobileNav";
import NavItems from "./NavItems";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? 'text-[#00B3FF]' : 'text-black')}
      >
        image
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
