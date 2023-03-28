import * as Handlers from "../handlers";
import * as Methods from "../../methods";

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case Methods.GET:
      return await Handlers.handleGetByName(req, res);
    default:
      res.status(400).json({
        message: "400 Bad Request: invalid method",
      });
  }
}
