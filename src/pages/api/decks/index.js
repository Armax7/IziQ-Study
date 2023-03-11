import * as Handlers from "./handlers";
import * as Methods from "../methods";

export default function handlerDecks(req, res) {
  const { method } = req;

  switch (method) {
    case Methods.GET:
      Handlers.getAllDecksHandler(req, res);
      break;
    case Methods.POST:
      Handlers.createDecksHandler(req, res);
      break;
    case Methods.PUT:
      Handlers.updateDecksHandler(req, res);
      break;
    case Methods.DELETE:
      Handlers.deleteDecksHandler(req, res);
      break;
    default:
      res.status(400).json({ message: "Invalid request method" });
  }
}
