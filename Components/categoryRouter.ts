import { v4 } from "uuid";
import { Router } from "express";

const router = Router();

router.get("/category", (req, res) => {
  res.json([]);
});

router.get("/category:id", (req, res) => {
  const item = null;

  res.status(item ? 200 : 404).json(item);

  res.json([]);
});

router.post("/category", function (req, res) {
  const id = v4();

  const { body } = req;
  console.log(body);

  body.id = id;

  // TODO save to DB

  res.json(body);
});

router.put("/category:id", (req, res) => {
  const { body } = req;

  // TODO save to DB

  res.json(body);
});

router.delete("/category:id", (req, res) => {
  res.status(204).json(null);
});

export default router;
