import { specialities } from "@/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutSpecialities = () => {
  return (
    <section className="container pl-3 md:pl-10 ">
        <h1 className="font-semibold text-5xl mb-10">
            Why Trust Our <br /> <span className="text-[#1065dc]">Specialities?</span>
        </h1>
        <div className="p-5 grid  place-items-center md:grid-cols-3 grid-cols-1 gap-5">
            {specialities.map((speciality) => (
                <div className="flex flex-col justify-center mb-5 gap-5 bg-slate-900/10 p-5 rounded-lg">
                <p className="text-[#1065dc] text-left text-xl"><FontAwesomeIcon icon={speciality.icon} /></p>
                <h1 className="subhead-text">{speciality.title}</h1>
                <p className="text-slate-900/80 text-xl">{speciality.desc}</p>
            </div>
            ))} 
        </div>
    </section>
  )
}

export default AboutSpecialities
