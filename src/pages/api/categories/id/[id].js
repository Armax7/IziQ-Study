import * as Methods from "../../methods";
import * as Controllers from "../controllers";

export default async function handlerById(req, res) {
  const method = req.method;
  const { id } = req.query;

  switch (method) {
    case Methods.GET:
      const response = await Controllers.getCategoriesById(id);
      if (JSON.stringify(response) === "[]") {
        res.status(404).json([{ error: "ID not found" }]);
      }
      res.status(200).json(response);
    default:
      res.status(400).json({
        message: "400 Bad Request: you can only use GET",
      });
  }
}
