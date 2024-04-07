import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="mb-10 h-[70vh] bg-center bg-no-repeat bg-[url(https://images.unsplash.com/photo-1655122878062-a9e885391a1b?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]">
      <div className="bg-slate-600/85 pt-7 h-full flex flex-col md:gap-3 gap-2 justify-center items-center">
        <p className="text-center font-semibold text-white">
          Dyeing and Bleaching Machinery Parts.
        </p>
        <h1 className="head-text text-center text-white">
          Quality Parts, Seamless Performance
        </h1>
        <p className="text-center font-semibold md:py-0 py-5 md:text-white text-black">
          Discover top-quality dyeing and bleaching machinery parts,
          meticulously crafted to ensure peak performance
        </p>
        <Link to={'/about'}>
        <Button size={'lg'}>
          Learn More
        </Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
