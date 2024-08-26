"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  { icon: <FaPhoneAlt />, title: "Phone", description: "(+91)XXXXXXXXXX" },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "sooryadevtj11@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: " Thrissur , Kerala",
  },
];
const contact = () => {
  return (
    <div className="container mx-auto mt-5 ">
      <div className="flex flex-col xl:flex-row gap-[30px]">
        <div className="xl:h-[54%] order-2 xl:order-none">
          <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
            <h3 className="text-4xl text-accent">Let&#39;s Work Together</h3>
            <p className="text-white/60">
              ksdjbksdjbfksdjfbksjdbfksjdbfksdjfbskjdbfsdjfksdjbfksdjf
            </p>
            <div className="grid grid-cols-1 md-grid-cols-2 gap-6">
              <Input type="FirstName" placeholder="FirstName" />
              <Input type="LastName" placeholder="LastName" />
              <Input type="Email" placeholder="Email" />
              <Input type="Phone" placeholder="Phone" />
            </div>
            <Textarea
              className="h-[200px] text-white text-md bg-primary"
              placeholder="Type your message here"
            ></Textarea>
            <Button size="md" className="max-w-40">
              Send Message
            </Button>
          </form>
        </div>
        <div className="flex flex-1 items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
          <ul className="flex flex-col gap-10">
            {info.map((item, index) => {
              return (
                <li key={index} className="flex items-center gap-6">
                  <div
                    className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c]
                  text-accent rounded-md flex items-center justify-center"
                  >
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default contact;
