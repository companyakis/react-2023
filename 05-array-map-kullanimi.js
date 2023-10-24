import React, { useState } from "react";
import ShowNames from "./ShowNames";

const ArrayMap = () => {
  const [names, setNames] = useState(["Bilge", "Kagan", "Kultigin"]);

  const adEkle = () => {
    const ilgiliAdlar = [...names];
    ilgiliAdlar.push("Mustafa");
    setNames(ilgiliAdlar);
  };

  return (
    <div>
      {names.map((ad, index) => {
        return <ShowNames key={index} name={ad} />;
      })}

      <button onClick={adEkle}>Beni Ekleyeceksin!</button>
    </div>
  );
};

export default ArrayMap;
