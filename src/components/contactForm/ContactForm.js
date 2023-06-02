import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}> 
    <label>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => {setName(e.target.value)}}
        placeholder="Contact Name"
        required
      />
    </label>
    <label>
      <input
        type="tel"
        name="phone"
        value={phone}
        onChange={(e) => {setPhone(e.target.value)}}
        //regex teléfono
        pattern="^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$"
        placeholder="Contact Phone Number"
        required
      />
    </label>
    <label>
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => {setEmail(e.target.value)}}
        placeholder="Contact Email"
        required
      />
    </label>
    <input name='Submit' type="submit" placeholder="Add Contact"/>
      
    </form>
  );
};

