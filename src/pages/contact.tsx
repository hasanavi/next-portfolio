import type { NextPage } from "next";
import KeepInTouch from "../components/KeepInTouch/KeepInTouch";
import ContactForm from "../components/ContactForm/ContactForm";

const Contact: NextPage = () => {
  return (
    <>
      <h1>Contact</h1>
      <ContactForm />
      <KeepInTouch />
    </>
  );
};

export default Contact;
