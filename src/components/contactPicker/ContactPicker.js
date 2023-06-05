import React from "react";

export const ContactPicker = ({contacts,name, value, onChange}) => {
  return (
    <select onChange={onChange} value={value} name={name}>
      <option key='0' value=''>
        No Contact Selected
      </option>
      {contacts.map((contact, i) => 
        <option key={i + 1} value={contact.name}>
          {contact.name}

        </option>
      
      )}
    </select>
  );
};
