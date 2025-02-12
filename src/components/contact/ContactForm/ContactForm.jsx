const ContactForm = () => {
  return (
    <div>
      <form className="space-y-7">
        <h2 className="text-center text-[25px] lg:text-[44px]">
          Get In Touch With Us
        </h2>
        <div className="lg:flex  items-center gap-[25px]">
          <div className="flex-1">
            <input
              className="w-full p-[10px] border bg-[#F9F9F9] border-[#DDDDDD] rounded-lg focus:outline-none"
              type="text"
              placeholder="Full Name*"
            />
          </div>
          <div className="flex-1">
            <input
              className="w-full mt-[28px] lg:mt-[0px] p-[10px] border bg-[#F9F9F9] border-[#DDDDDD] rounded-lg focus:outline-none"
              type="text"
              placeholder="Phone Number"
            />
          </div>
        </div>
        <div>
          <input
            className="w-full p-[10px] border bg-[#F9F9F9] border-[#DDDDDD] rounded-lg focus:outline-none"
            type="email"
            placeholder="Email*"
          />
        </div>
        <div>
          <textarea
            className="w-full p-[10px] border bg-[#F9F9F9] border-[#DDDDDD] rounded-lg focus:outline-none"
            name=""
            placeholder="Write Message"
            rows={5}
          ></textarea>
        </div>
        <div>
          <button className="bg-[#FF8D28] px-[60px] py-[12px] rounded-lg shadow-[0px_4px_20px_0px_rgba(136,197,64,0.3)]">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
