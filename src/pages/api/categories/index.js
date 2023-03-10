import * as Controllers from "./controllers";
import * as Handlers from "./handlers";
import * as Methods from "../methods";

export default async function handlerCategories(req, res) {
  const method = req.method;

  switch (method) {
    case Methods.GET:
      await Handlers.handleGet(req, res);
    case Methods.POST:
      await Handlers.handlePost(req, res);
    default:
      res.status(400).json({
        message: "400 Bad Request: you can only use GET",
      });
  }
}
