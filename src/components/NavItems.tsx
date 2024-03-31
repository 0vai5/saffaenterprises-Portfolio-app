import { NavLink } from "react-router-dom";

const NavItems = () => {
  return (
    <ul className="flex flex-col md:flex-row gap-10 justify-between items-start md:items-center mt-10 md:mt-0">
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? 'text-[#00B3FF]' : 'text-black')}
      >
        <li>
          <h4 className="text-lg">About</h4>
        </li>
      </NavLink>
      <NavLink 
      to="/contact"
      className={({ isActive }) => (isActive ? 'text-[#00B3FF]' : 'text-black')}>
        <li>
          <h4 className="text-lg">Contact</h4>
        </li>
      </NavLink>
    </ul>
  );
};

export default NavItems;
