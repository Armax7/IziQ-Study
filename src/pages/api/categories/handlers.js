import * as Controllers from "./controllers";

export async function handleGet(req, res) {
    try {
        const response = await Controllers.getCategoriesFromSb();
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
      .status(200)
      .json({ message: `Submited on categories: ${JSON.stringify(response)}` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function handlePut() {}

export async function handleDelete() {}
