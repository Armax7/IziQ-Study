import * as Controllers from "./controllers";

export async function getAllDecksHandler(req, res) {
  try {
    const decks = await Controllers.getAllDecks();
    res.status(200).json(decks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getDecksByNameHandler(req, res) {
  const { name } = req.query;
  try {
    const deck = await Controllers.getDecksByName(name);
    res.status(201).json(deck);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getDeckByUserIdHandler(req, res) {
  const { uuid } = req.query;
  try {
    const userDecks = await Controllers.getDeckByUserId(uuid);
    res.send(userDecks);
  } catch (error) {
    res.status(404).send(error.message);
  }
}
