import { z } from "zod";
import express from "express";

const app = express();

app.use(express.json());

const User = z.object({
  employee: z.string(),
  id: z.number(),
});

app.post("/post", (req, res) => {
  const user = req.body;
  try {
    User.parse(user);
    console.log("pass");
    res.send("pass");
  } catch (error) {
    console.log("not pass");
    res.status(400).send("not pass");
  }
});

app.listen(5000, () => {
  console.log("Server running port 5000");
});
