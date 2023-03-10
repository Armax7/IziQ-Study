import {
  getAllDecksHandler,
  createDecksHandler,
  updateDecksHandler,
  deleteDecksHandler,
} from "./handlers";

export default function handlerDecks(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      getAllDecksHandler(req, res);
      break;
    case "POST":
      createDecksHandler(req, res);
      break;
    case "PUT":
      updateDecksHandler(req, res);
      break;
    case "DELETE":
      deleteDecksHandler(req, res);
      break;
    default:
      res.status(400).json({ message: "Invalid request method" });
  }
}
