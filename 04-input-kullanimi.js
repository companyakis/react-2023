import React, { useState } from "react";

const InputUsage = () => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleClick = () => {
    setName("");
  };

  return (
    <div>
      <div>Adınızı giriniz: </div>
      <div>
        <input value={name} onChange={(e) => handleChange(e)} />
      </div>
      <div>
        <button onClick={handleClick}>Bilgiyi Temizle</button>
      </div>
      <div>Adınız: {name}</div>
    </div>
  );
};

export default InputUsage;
