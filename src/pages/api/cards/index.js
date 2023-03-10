import { getAllFromCardsHandler, createCardsHandler, updateCardsHandler, deleteCardsHandler } from "./handlers";

export default function handlerCards(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      getAllFromCardsHandler(req, res);
      break;
    case "POST":
      createCardsHandler(req, res);
      break;
    case "PUT":
      updateCardsHandler(req, res);
      break;
    case "DELETE":
      deleteCardsHandler(req, res);
      break;
    default:
      res.status(400).json({ message: "Invalid request method" });
  }
}
