import bodyParser from "body-parser";
import express from "express";
import morgan from "morgan";
import render from "./render";

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));
app.get("/", (req, res) => {
    // render.pipe(res);
    res.send(render);
});

export default app;
