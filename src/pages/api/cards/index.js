import * as Handlers from "./handlers";
import * as Methods from "../methods";

export default function handlerCards(req, res) {
  const { method } = req;

  switch (method) {
    case Methods.GET:
      Handlers.getAllFromCardsHandler(req, res);
      break;
    case Methods.POST:
      Handlers.createCardsHandler(req, res);
      break;
    case Methods.PUT:
      Handlers.updateCardsHandler(req, res);
      break;
    case Methods.DELETE:
      Handlers.deleteCardsHandler(req, res);
      break;
    default:
      res.status(400).json({ message: "Invalid request method" });
  }
}
