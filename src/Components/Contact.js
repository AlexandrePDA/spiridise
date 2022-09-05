import React from "react";
import calendly from "../assets/calendlylogo.png";
import malt from "../assets/maltlogo.png";
import linkedin from "../assets/linkedin-logo.png";

const Contact = () => {
  return (
    <div id="contact" className="pb-10">
      

      <div className="w-9/12 mx-auto rounded-xl shadow-lg bg-white md:w-1/2">
        <div className="flex flex-col items-center">
          <h3 className="mt-4 text-lg mb-2 p-4 text-center">
            Un devis ? Une question ? Une remarque ?
          </h3>
          <p>Lorem ipsum Lorem ipsum</p>
          <div className="flex gap-x-2 mt-2 mb-8">
                <a href="https://www.malt.fr/profile/ameladdoun">
              <img
                src={malt}
                alt="logo malt"
                className=" rounded-xl transition-all duration-300 w-8 hover:scale-110"
              />
            </a>
            <a href="https://www.linkedin.com/in/amel-addoun-84a13519a">
              <img
                src={linkedin}
                alt="logo linkedin"
                className="rounded w-8  transition-all duration-300 hover:scale-110"
              />
            </a>
            </div>
          <p className="mb-2">Prenons rendez-vous et échangeons !</p>
          <a href="https://calendly.com/amel-addoun/30min" className="mb-4">

          <img src={calendly} alt="calendly logo" className="w-28 transition-all duration-300 hover:scale-110" />
          </a>
          <p>Amel Addoun</p>
          <div className="flex gap-x-2 items-center">
          <ion-icon name="mail-unread-outline"></ion-icon>
          <a href="mailto:contact@spiridise.com">
            contact@spiridise.com
          </a>
          </div>
          <div className="flex gap-x-2 items-center mb-6">
            <ion-icon name="call-outline"></ion-icon>
            <p> 06.61.01.59.72</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
