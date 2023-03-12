import { getAllFromUserDetailHandler } from "./handlers";

export default function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      getAllFromUserDetailHandler(req, res);
      break;
    case "POST":
      createUserDetail(req, res);
      break;
    case "PUT":
      updateUserDetail(req, res);
      break;
    case "DELETE":
      deleteUserDetail(req, res);
      break;
    default:
      res.status(400).json({ message: "Invalid request method" });
  }
}
