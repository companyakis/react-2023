import { useState, useEffect } from "react";
import axios from "axios";

const DataFetcher = () => {
  const [res, setRes] = useState("");

  const [cokveri, setCokVeri] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        setRes(response.data);
      });
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setCokVeri(response.data);
    });
  }, []);

  return (
    <>
      <div>
        <div>İlk istekten elde edilen veri: {res.title}</div>
      </div>
      <div>
        <h3>Çoklu verinin "body" verisi aşağıda!</h3>
        {cokveri.map((veri) => {
          return <div key={veri.id}>{veri.body}</div>;
        })}
      </div>
    </>
  );
};

export default DataFetcher;
