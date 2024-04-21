import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { contactInfo } from "@/constants"; // Make sure contactInfo is properly defined and exported in "@/constants"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container bg-[#1065DC] flex justify-between items-center gap-10 md:flex-row md:gap-5 flex-col px-10 py-10">
        {contactInfo.map((info, index) => (
          <div key={index} className="flex justify-center items-center gap-2">
            <FontAwesomeIcon icon={info.icon} className="text-3xl text-white"/>
            {Array.isArray(info.items) ? (
              <ul>
                {info.items.map((item, index) => (
                 <a href={info.href}> <li key={index}>{item}</li></a>
                ))}
              </ul>
            ) : (
              <a href= {info.href}><p className="text-center text-wrap">{info.items}</p></a> 
            )}
          </div>
        ))}
      </div>
      <div className="footer-container bg-black text-white">
        <div className="z-10">
          <img src="./saffaenterprises.png" alt="logo" className="h-28" />
        </div>
        <p>&copy; Saffa Enterprises. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
