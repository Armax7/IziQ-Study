import { getCardByDeckIdHandler } from "../handlers";

export default async function hndler(req, res) {
  const { method } = req;
  const { uuid } = req.query;

  switch (method) {
    case "GET":
      getCardByDeckIdHandler(req, res);
      break;
    default:
      res.status(400).json({ message: "Invalid request method" });
  }
}
