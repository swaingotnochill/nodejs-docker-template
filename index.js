import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/users.js";

const app = express();

const PORT = 5000;

app.use(bodyParser.json());

app.use("/users", userRoutes);

app.get("/", (req, res) => {
    res.send("Hello, from HomePage!!!");
});

/*
app.all("*", (req, res) => {
    res.send("You've tried reaching a route that doesn't exist!!!");
});
*/

app.listen(PORT, () => {
    console.log(`Server running on port : http://localhost:${PORT}`);
});
