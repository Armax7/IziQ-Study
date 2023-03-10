import { getAllFromCardsHandler } from "./handlers";

export default function handlerCards(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      getAllFromCardsHandler(req, res);
      break;
    case "POST":
      createCards(req, res);
      break;
    case "PUT":
      updateCards(req, res);
      break;
    case "DELETE":
      deleteCards(req, res);
      break;
    default:
      res.status(400).json({ message: "Invalid request method" });
  }
}
