import * as Controllers from "./controllers";

export async function handleGet(req, res) {
  try {
    const response = await Controllers.getCategoriesFromSb();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function handleGetByName(req, res) {
  const { name } = req.query;

  try {
    const response = await Controllers.getCategoriesByName(name);
    if (JSON.stringify(response) === "[]") {
      res.status(404).json([{ error: "Name not found" }]);
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function handleGetById(req, res) {
  const { id } = req.query;

  try {
    const response = await Controllers.getCategoriesById(id);
    if (JSON.stringify(response) === "[]") {
      res.status(404).json([{ error: "ID not found" }]);
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function handlePost(req, res) {
  const body = req.body;

  try {
    const response = await Controllers.postCategory(body);
    res
      .status(201)
      .json({ message: `Submited on categories: ${JSON.stringify(response)}` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function handlePut(req, res) {
  const body = req.body;

  try {
    const response = await Controllers.updateCategory(body);
    res.status(200).json({
      message: `Category with ID: ${JSON.stringify(
        response.at(0).id
      )} updated with ${JSON.stringify(response)}`,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function handleDelete(req, res) {
  const body = req.body;

  try {
    const response = await Controllers.deleteCategory(body);
    res.status(204).json({ message: "Deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
