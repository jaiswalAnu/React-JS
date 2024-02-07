import { response } from "express";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom/dist/umd/react-router-dom.development";

function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://api.github.com/users/hiteshchoudhary")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  });
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github followers:{data.followers}
    </div>
  );
}

export default Github;
