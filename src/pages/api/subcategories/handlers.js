import * as Controllers from "./controllers";

export async function handleGet(req, res) {
  try {
    const response = await Controllers.getSubcategoriesFromSb();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message }).end();
  }
}

export async function handleGetByName(req, res) {
  const { name } = req.query;

  try {
    const response = await Controllers.getSubCategoriesByName(name);
    if (JSON.stringify(response) === "[]") {
      return res.status(404).json([{ error: "Subcategory not found" }]);
    }
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
