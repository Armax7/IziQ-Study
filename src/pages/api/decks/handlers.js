import * as Controllers from "./controllers";

export async function handleGet(req, res) {
  try {
    const decks = await Controllers.getAllDecks();
    return res.status(200).json(decks);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export async function handleGetByName(req, res) {
  const { name } = req.query;
  try {
    const deck = await Controllers.getDecksByName(name);
    return res.status(201).json(deck);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export async function handleGetById(req, res) {
  const { uuid } = req.query;
  try {
    const userDecks = await Controllers.getDeckById(uuid);
    return res.status(200).json(userDecks);
  } catch (error) {
    return res.status(404).json(error.message);
  }
}

export async function handleGetByUserId(req, res) {
  const { uuid } = req.query;
  try {
    const userDecks = await Controllers.getDeckByUserId(uuid);
    return res.status(200).json(userDecks);
  } catch (error) {
    return res.status(404).json(error.message);
  }
}

export async function handlePost(req, res) {
  const body = req.body;
  try {
    const postDeck = await Controllers.postNewDeck(body);
    return res.status(200).json(postDeck);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
}

export async function handlePut(req, res) {
  const body = req.body;
  try {
    const updateDeck = await Controllers.updateDeck(body);
    return res.status(200).json(updateDeck);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
}

export async function handleDelete(req, res) {
  const body = req.body;

  try {
    const response = await Controllers.deleteDeck(body);
    return res.status(200).json({ message: "Deck successfully removed" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
