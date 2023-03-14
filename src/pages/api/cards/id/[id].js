import * as Handlers from "../handlers";
import * as Methods from "../../methods";

export default async function hndler(req, res) {
  const { method } = req;

  switch (method) {
    case Methods.GET:
      return await Handlers.handleGetById(req, res);
    default:
      res.status(400).json({
        message: "400 Bad Request: invalid method",
      });
  }
}
