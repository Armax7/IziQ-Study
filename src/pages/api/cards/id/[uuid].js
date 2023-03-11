import * as Handlers from "../handlers";

export default async function hndler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      Handlers.getCardByDeckIdHandler(req, res);
      break;
    default:
      res.status(400).json({ message: "Invalid request method" });
  }
}
