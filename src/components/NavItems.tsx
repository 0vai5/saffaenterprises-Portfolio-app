import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";

const NavItems = () => {
  return (
    <ul className="flex flex-col md:flex-row gap-10 justify-between items-start md:items-center mt-10 md:mt-0">
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "text-[#00B3FF]" : "text-black md:text-white"
        }
      >
        <li>
          <h4 className="text-xl font-semibold">About</h4>
        </li>
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "text-[#00B3FF]" : "text-black md:text-white"
        }
      >
        <li>
          <h4 className="text-xl font-semibold">Contact</h4>
        </li>
      </NavLink>

      <NavLink to={'/quote'}>
        <li>
          <Button>Get a Quote</Button>
        </li>
      </NavLink>
    </ul>
  );
};

export default NavItems;
