import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const Accordion = () => {
  const contents = [
    {
      title: "About Bandhon Cycle Store",
      content:
        "Bandhon Cycle Store is a leading bicycle retailer, offering high-quality bikes for all ages. We specialize in both new and used cycles, providing top-notch customer service and affordable pricing.",
    },
    {
      title: "Our Product Range",
      content:
        "We offer a wide variety of bicycles, including mountain bikes, road bikes, hybrid bikes, and kids' bikes. Our collection includes top brands with the latest models.",
    },
    {
      title: "Why Choose Us?",
      content:
        "We provide durable, high-quality bicycles at the best prices. Our store also offers expert guidance, warranty services, and after-sales support to ensure customer satisfaction.",
    },
    {
      title: "Services We Offer",
      content:
        "Our services include bicycle repair, maintenance, customization, and accessories. We also offer home delivery and assembly services for added convenience.",
    },
    {
      title: "Payment Options",
      content:
        "Customers can pay using cash, credit/debit cards, mobile banking, and online payment gateways. We also offer installment payment plans for high-end models.",
    },
    {
      title: "Store Location & Hours",
      content:
        "We are located at [Your Address]. Our store operates from 9 AM to 9 PM, seven days a week. Visit us to explore our latest collections!",
    },
    {
      title: "Customer Support",
      content:
        "For any inquiries, call us at +8801XXXXXXXXX or email us at support@bandhoncycle.com. Our team is ready to assist you with any questions.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null); // Track the open item index

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle the clicked item
  };
  return (
    <div className="space-y-4">
      {contents.map((item, index) => (
        <div key={index} className="border p-4   transition-all duration-300">
          <button
            onClick={() => toggleAccordion(index)}
            className="flex justify-between items-center w-full text-left"
          >
            <h3 className="text-lg font-semibold">{item.title}</h3>
            {openIndex === index ? <FaMinus /> : <FaPlus />}
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index
                ? "max-h-40 opacity-100 py-2"
                : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-gray-600">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
