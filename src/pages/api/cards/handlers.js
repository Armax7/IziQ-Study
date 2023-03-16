import * as Controllers from "./controllers";

export async function handleGet(req, res) {
  try {
    const response = await Controllers.getAllCards();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export async function handleGetByName(req, res) {
  const { name } = req.query;

  try {
    const response = await Controllers.getCardByNameQuestion(name);
    if (JSON.stringify(response) === "[]") {
      return res.status(404).json([{ error: "Name not found" }]);
    }
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export async function handleGetById(req, res) {
  const { id } = req.query;

  try {
    const response = await Controllers.getCardById(id);
    if (JSON.stringify(response) === "[]") {
      return res.status(404).json([{ error: "Card with ID not found" }]);
    }
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export async function handleGetByDeckId(req, res) {
  const { deckId } = req.query;

  try {
    const response = await Controllers.getCardsByDeckId(deckId);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export async function handlePost(req, res) {
  const body = req.body;

  try {
    const response = await Controllers.postCard(body);
    res
      .status(201)
      .json({ message: `Submited on card: ${JSON.stringify(response)}` });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export async function handlePut(req, res) {
  const body = req.body;

  try {
    const response = await Controllers.updateCard(body);
    return res.status(200).json({
      message: `Card with ID: ${JSON.stringify(
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
    const response = await Controllers.deleteCard(body);
    return res.status(204).end();
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
