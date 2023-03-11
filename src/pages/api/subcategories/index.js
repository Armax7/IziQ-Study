import * as Handlers from "./handlers";
import * as Methods from "../methods";

export default async function handlerCategories(req, res) {
  const method = req.method;

  switch (method) {
    case Methods.GET:
      return await Handlers.handleGet(req, res);
    // case Methods.POST:
    //   await Handlers.handlePost(req, res);
    // case Methods.PUT:
    //   await Handlers.handlePut(req, res);
    // case Methods.DELETE:
    //   await Handlers.handleDelete(req, res);
    default:
      return res.status(400).json({
        message: "400 Bad Request: invalid method",
      });
  }
}
