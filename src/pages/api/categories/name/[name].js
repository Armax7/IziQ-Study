import * as Methods from "../../methods";
import * as Handlers from "../handlers";

export default async function handlerById(req, res) {
  const method = req.method;

  switch (method) {
    case Methods.GET:
      await Handlers.handleGetByName(req, res);
    default:
      res.status(400).json({
        message: "400 Bad Request: invalid method",
      });
  }
}
