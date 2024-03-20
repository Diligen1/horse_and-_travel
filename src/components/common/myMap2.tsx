import React from "react";

const MyMap2: React.FC = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2965.140974143012!2d75.16993207609066!3d41.99724997122892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDU5JzUwLjEiTiA3NcKwMTAnMjEuMCJF!5e0!3m2!1sky!2skg!4v1710921490233!5m2!1sky!2skg"
      className="w-full h-[450px] border-none"
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
};

export default MyMap2;
