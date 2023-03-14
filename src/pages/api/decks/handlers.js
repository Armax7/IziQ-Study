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

export async function createDecksHandler(req, res) {
  const body = req.body;
  try {
    const postDeck = await Controllers.postNewDeck(body);
    res.status(200).json(postDeck);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

export async function updateDecksHandler(req, res) {
  const body = req.body;
  try {
    const updateDeck = await Controllers.modificatedDeck(body);
    res.status(200).json(updateDeck);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

export async function deleteDecksHandler(req, res) {
  const body = req.body;
  console.log("BODY",body);

  try {
    const response = await Controllers.removeDeckById(JSON.parse(body));
    return res.status(200).json({ message: "Deck successfully removed" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}  