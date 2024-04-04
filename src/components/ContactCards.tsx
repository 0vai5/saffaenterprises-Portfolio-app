import { contactInfo } from "@/constants"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactCards = () => {
  return (
    <section className="max-container">
      <div className="flex md:flex-row flex-col justify-between items-center gap-5">
        {contactInfo.map((info) => (
          <div key={info.type} className="border border-[#1065dc] w-full md:w-1/4 py-10 flex flex-col justify-between items-center rounded-md">
            <div className="logo px-2 py-1 mb-4">
              <h1 className="subhead-text text-[#1065dc]">
                <FontAwesomeIcon icon={info.icon} />
              </h1>
            </div>
            <h3 className="font-semibold">{info.type}</h3>
            {Array.isArray(info.items) ? (
              info.items.map((item, index) => (
                <p key={index} className="text-center">{item}</p>
              ))
            ) : (
              <p className="text-center">{info.items}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default ContactCards
