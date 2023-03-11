import * as Controllers from "./controllers";

export async function handleGet(req, res) {
  try {
    const response = await Controllers.getSubcategoriesFromSb();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message }).end();
  }
}
