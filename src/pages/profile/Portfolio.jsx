import React, { useState, useEffect } from "react";

function Portfolio() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, []);

  return (
    <section className="w-[90%] m-auto">
      <h1 className="text-center md:text-lg lg:text-3xl font-bold text-black-color p-5">
      Account data
      </h1>
      <section className="flex justify-end text-end rounded-lg">
        <div className="w-[100%] mt-6 text-black">
          <h3 className="text-sm mb-1.5 font-bold text-black-color">
           Full name :
          </h3>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="... اسمك بالكامل"
            className="mr-10 mb-4 p-1.5 text-end bg-main-color w-[100%] rounded-lg focus:ring-0 focus:border-gray-600 placeholder:text-black-color placeholder:text-xs"
            readOnly
          />
          <h3 className="text-sm mb-1.5 font-bold mt-2 text-black-color">
          Email :
          </h3>
          <input
            type="text"
            name="email"
            value={email}
            placeholder="...البريد الالكتروني"
            className="mr-10 mb-4 p-1.5 text-end bg-main-color w-[100%] rounded-lg focus:ring-0 focus:border-gray-600 placeholder:text-black-color placeholder:text-xs"
            readOnly
          />

        </div>
      </section>
    </section>
  );
}

export default Portfolio;
