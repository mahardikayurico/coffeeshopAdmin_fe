import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "../../assets/css/background.css";

const Message = () => {
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="container max-w-5xl mx-auto flex flex-row  profil-bg ">
        <section className=" basis-[20%] mt-3">
          <h1 className="text-white "> User Profil </h1>
        </section>

        <section className="  ml-3 basis-[80%] mt-3"></section>
      </main>
      <Footer />
    </div>
  );
};

export default Message;
