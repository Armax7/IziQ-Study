import * as Methods from "../../methods";
import * as Handlers from "../handlers";

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case Methods.GET:
      return await Handlers.handleGetByName(req, res);
    default:
      res.status(400).json({ message: "Invalid request method" });
  }
}
