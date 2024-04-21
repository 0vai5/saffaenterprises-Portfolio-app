import Marquee from "react-fast-marquee";
import { Clients } from "../constants";


const Merquee = () => {
  return (
    <section className="max-w-6xl mx-auto  px-2 min-h-[10vh] text-center flex items-center flex-col">
        <h1 className="head-text mb-5">Trusted <span className="text-[#1065DC]">Clients</span></h1>
      <Marquee speed={60} gradient={true} gradientWidth={100}>
        <div className="flex gap-[5rem] items-center justify-center">
        {Clients.map((client, index) => (
        <img key={index} src={client.logo} alt={client.name} className={client.classes} />
      ))}
        </div>
        
    </Marquee>
    </section>
  )
}

export default Merquee
