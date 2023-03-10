import { getUserDetailByIdHandler } from "../handlers";

export default async function handler(req, res) {
  const { method } = req;
  const { uuid } = req.query;

  switch (method) {
    case "GET":
      getUserDetailByIdHandler(req, res);
      break;
    default:
      res.status(400).json({ message: "Invalid request method" });
  }
}