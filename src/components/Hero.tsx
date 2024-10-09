import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="mb-10 h-[80vh] relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
      >
        <source src={`./hero1.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 w-full bg-gray-600/70 pt-7 h-full flex flex-col md:gap-3 gap-2 justify-center items-center">
        <p className="text-center font-semibold text-white">
          Dyeing and Bleaching Machinery Parts.
        </p>
        <h1 className="head-text text-center text-white">
          Quality Parts, Seamless Performance
        </h1>
        <p className="text-center font-semibold md:py-0 py-5 md:text-white text-black">
          Discover top-quality dyeing and bleaching machinery parts,
          meticulously crafted to ensure peak performance.
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
