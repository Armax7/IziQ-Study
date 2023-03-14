import * as Handlers from "./handlers";
import * as Methods from "../methods";

export default function handler(req, res) {
  const { method } = req;

  switch (method) {
    case Methods.GET:
      getAllFromUserDetailHandler(req, res);
      break;
    case Methods.POST:
      createUserDetail(req, res);
      break;
    case Methods.PUT:
      updateUserDetail(req, res);
      break;
    case Methods.DELETE:
      deleteUserDetail(req, res);
      break;
    default:
      res.status(400).json({ message: "Invalid request method" });
  }
}
