import * as Methods from "../../methods";
import * as Handlers from "../handlers";

export default async function handler(req, res) {
  const { method } = req;
  const { uuid } = req.query;

  switch (method) {
    case Methods.GET:
      return await Handlers.handleGetByUserUuid(req, res);
    default:
      res.status(400).json({ message: "Invalid request method" });
  }
}
