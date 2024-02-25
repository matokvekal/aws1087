import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import { join } from "path";
import { fileURLToPath } from "url";

let app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static("public"));
app.use(express.json());

app.post("/", (req, res) => {
  console.log(req.body);
  if(req.body.name){
  const myUsername = req.body.name;
  res.cookie("username", myUsername);
  res.redirect("/welcome");
  } else {
    res.redirect("/");
  }
});

app.get("/welcome", (req, res) => {
  const currentFilePath = fileURLToPath(import.meta.url);
  const formPath = join(currentFilePath, "..", "./public/welcome.html");
  res.send("Hello World");
});

const server = app.listen(3000, () => {
  console.log("listening on port 3000");
});
