import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const App = () => {
  const { data } = useQuery({
    queryKey: ["ip"],
    queryFn: async () => {
      const res = await fetch("https://httpbin.org/ip");
      return res.json();
    },
  });
  return (
    <div>
      <h1>IP Address</h1>
      {data && <p>IP : {data.origin}</p>}
      <Link to={"/zod"}>
        <button>ZOD VALIDATION</button>
      </Link>
    </div>
  );
};

export default App;
