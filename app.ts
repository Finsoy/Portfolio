import { v4 } from "uuid";
import path from "path";
import express from "express";
import cors from "cors";
import * as storage from "./storage/storage";

const app = express();
const port = process.env.PORT || 3000;
const dbUrl =
  "mongodb+srv://vadim:qwerty123@cluster0.mhsjr.mongodb.net/mongo-node-app?retryWrites=true&w=majority";

app.use(express.static(path.resolve(__dirname, "../public")));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Heroku");
});

app.get("/category", async (req, res) => {
  const list = await storage.listAll();
  await res.json(list);
});

app.get("/category:id", async (req, res) => {
  const item = await storage.getById(req.params.id);

  res.status(item ? 200 : 404).json(item);

  res.json(item);
});

app.post("/category", async (req, res) => {
  const id = v4();

  const { body } = req;

  body.id = id;

  const newBody = await storage.create(body);

  res.json(newBody);
});

app.put("/category:id", async (req, res) => {
  const { body } = req;

  const newBody = await storage.update({
    ...body,
    id: req.params.id,
  });

  res.json(newBody);
});

app.delete("/category:id", async (req, res) => {
  await storage.remove(req.params.id);
  res.status(204).json(null);
});

app.listen(port, () => {
  try {
    console.log(`server is listening on ${port}`);
  } catch (e) {
    console.log(e);
  }
});
