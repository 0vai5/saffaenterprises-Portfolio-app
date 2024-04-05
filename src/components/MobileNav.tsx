import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavItems } from ".";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const MobileNav = () => {
  return (
    <nav className="block md:hidden">
      <Sheet>
        <SheetTrigger>
          <FontAwesomeIcon icon={faBars} className="font-bold text-3xl text-black" />
        </SheetTrigger>
        <SheetContent className="bg-white drop-shadow-[-100px 0px 30px -10px rgba(0,0,0,0.1)]">
          <div>
            <Link to={'/'}>
            <img src="./saffaenterprises.png" alt="logo"  className="h-32 w-32"/>
            </Link>
          </div>
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
