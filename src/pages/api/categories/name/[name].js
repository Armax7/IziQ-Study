import * as Methods from "../../methods";
import * as Controllers from "../controllers";

export default async function handlerById(req, res) {
  const method = req.method;
  const { name } = req.query;

  switch (method) {
    case Methods.GET:
      const response = await Controllers.getCategoriesByName(name);
      res.status(200).json(response);
    default:
      res.status(400).json({
        message: "400 Bad Request: you can only use GET",
      });
  }
}
