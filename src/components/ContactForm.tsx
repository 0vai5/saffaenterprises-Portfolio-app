const ContactForm = () => {
  return (
    <section className="max-container">
        <h1 className="head-text">Get in <span className="text-[#1065dc]">Touch</span></h1>
      <form>
        <div className="flex justify-between gap-5 items-center md:flex-row flex-col ">
          <div className="flex flex-col">
            <label>Name</label>
            <input type="text" className="input" />
          </div>
          <div className="flex flex-col">
            <label>Email</label>
            <input type="Email" className="input" />
          </div>
        </div>
        <div className="flex justify-between gap-5 items-center flex-col md:flex-row">
          <div className="flex flex-col">
            <label>Organization Name</label>
            <input type="text" className="input" />
          </div>
          <div className="flex flex-col">
            <label>Organization Email</label>
            <input type="Email" className="input" />
          </div>
        </div>
        <div className="flex flex-col">
        <label>Message</label>
        <textarea className="textarea"/>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
