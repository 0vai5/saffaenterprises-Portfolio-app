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
        <SheetContent className="bg-white/50">
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
