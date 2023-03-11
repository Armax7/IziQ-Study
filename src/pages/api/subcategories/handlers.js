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

export async function handleGetById(req, res) {
  const { id } = req.query;

  try {
    const response = await Controllers.getSubCategoriesById(id);
    if (JSON.stringify(response) === "[]") {
      return res.status(404).json([{ error: "Subcategory ID not found" }]);
    }
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export async function handleGetByCategoryId(req, res) {
  const { id } = req.query;

  try {
    const response = await Controllers.getSubCategoriesByCategoryId(id);
    if (JSON.stringify(response) === "[]") {
      return res.status(404).json([{ error: "Category ID not found" }]);
    }
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export async function handlePost(req, res) {
  const body = req.body;

  try {
    const response = await Controllers.postSubCategory(body);
    return res.status(201).json({
      message: `Submited on subcategories: ${JSON.stringify(response)}`,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export async function handlePut(req, res) {
  const body = req.body;

  try {
    const response = await Controllers.updateSubCategory(body);
    return res.status(200).json({
      message: `Subcategory with ID: ${JSON.stringify(
        response.at(0).id
      )} updated with ${JSON.stringify(response)}`,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export async function handleDelete(req, res) {
  const body = req.body;

  try {
    const response = await Controllers.deleteSubCategory(body);
    return res.status(204).end();
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
