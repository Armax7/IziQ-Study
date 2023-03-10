
import * as Controllers from "./controllers";
import * as Methods from "../methods";
 
export default async function handlerCategories(req, res) {
  const method = req.method;

  switch (method) {
    case Methods.GET:
        const response = await Controllers.getCategoriesFromSb();
        res.status(200).json(response)
    default:
      res
        .status(400)
        .json({
          message: "400 Bad Request: you can only use GET",
        });
  }
}