import type { NextPage } from "next";
import Layout from "../hoc/Layout";
import KeepInTouch from "../components/KeepInTouch/KeepInTouch";

const Contact: NextPage = () => {
  return (
    <Layout title="Contact">
      <h1>Contact</h1>
      <KeepInTouch />
    </Layout>
  );
};

export default Contact;
