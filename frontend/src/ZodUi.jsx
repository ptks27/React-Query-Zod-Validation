import { z } from "zod";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const User = z.object({
  employee: z.string(),
  id: z.number(),
});

const ZodUi = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const data = { employee: "Dui", id: 123 };
    try {
      User.parse(data);
      setUser(true);
    } catch (error) {
      setUser(false);
      console.log(error);
    }
  }, []);

  return (
    <div>
      <h1>Zod Validation</h1>
      {user !== "" && <p>{user ? "Pass" : "Not Pass"}</p>}
      <Link to={"/"}>
        <button>API IP ADDRESS</button>
      </Link>
    </div>
  );
};

export default ZodUi;
