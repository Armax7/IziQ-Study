import * as Methods from "../../methods";
import * as Handlers from "../handlers";

export default async function handlerByCategoryId(req, res) {
  const method = req.method;

  switch (method) {
    case Methods.GET:
      return await Handlers.handleGetByCategoryId(req, res);
    default:
      res.status(400).json({
        message: "400 Bad Request: invalid method",
      });
  }
}
