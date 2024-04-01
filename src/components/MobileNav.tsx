import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import NavItems from "./NavItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const MobileNav = () => {
  return (
    <nav className="block md:hidden">
      <Sheet>
        <SheetTrigger>
          <FontAwesomeIcon icon={faBars} />
        </SheetTrigger>
        <SheetContent className="bg-white">
          <div>
            <h1 className="subhead-text">
              SAFFA <br />
              <span className="text-[#1065DC]">Enterprises</span>
            </h1>
          </div>
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
