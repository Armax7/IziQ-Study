import * as Handlers from "./handlers";
import * as Methods from "../methods";

export default function handler(req, res) {
  const { method } = req;

  switch (method) {
    case Methods.GET:
      Handlers.getAllFromUserDetailHandler(req, res);
      break;
    case Methods.POST:
      Handlers.createUserDetail(req, res);
      break;
    case Methods.PUT:
      Handlers.updateUserDetail(req, res);
      break;
    case Methods.DELETE:
      Handlers.deleteUserDetail(req, res);
      break;
    default:
      res.status(400).json({ message: "Invalid request method" });
  }
}
