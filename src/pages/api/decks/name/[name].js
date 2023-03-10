import { getDecksByNameHandler } from "../handlers";

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
        getDecksByNameHandler(req, res);
      break;
    default:
      res.status(400).json({ message: "Invalid request method" });
  }
}
