import React from "react";

const MyMap: React.FC = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11860.272682187702!2d74.9693125!3d41.9988125!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389a27c2ed8420cd%3A0x13d7e64a41c924a8!2sHorse%20riding%20Kyzart%20Song%20Kul%20lake!5e0!3m2!1sru!2skg!4v1710853543733!5m2!1sru!2skg"
      className="w-full h-[450px] border-none"
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
};

export default MyMap;
