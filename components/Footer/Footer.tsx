import React from "react";
import { ContactForm } from "../ContactForm/ContactForm";

export const Footer = () => {
  return (
    <div className="w-full border-teal-600 self-end">
      <ContactForm />
      <p className="text-center font-light text-sm m-2">&copy; Thaarik Ahamed 2024 </p>
    </div>
  );
};
