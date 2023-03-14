import * as Handlers from "./handlers";
import * as Methods from "../methods";

export default function handler(req, res) {
  const { method } = req;

  switch (method) {
    case Methods.GET:
      Handlers.getAllFromUserDetailHandler(req, res);
      break;
    case Methods.POST:
      Handlers.createUserDetailHandler(req, res);
      break;
    case Methods.PUT:
      Handlers.updateUserDetailHandler(req, res);
      break;
    case Methods.DELETE:
      Handlers.deleteUserDetailHandler(req, res);
      break;
    default:
      res.status(400).json({ message: "Invalid request method" });
  }
}
