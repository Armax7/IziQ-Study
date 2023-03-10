import {
  getAllCards,
  getCardByDeckID,
  getCardByNameQuestion,
} from "./controllers";

export async function getAllFromCardsHandler(req, res) {
  try {
    const cards = await getAllCards();
    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getCardByNameQuestionHandler(req, res) {
  const { name } = req.query;
  try {
    const cardQuestion = await getCardByNameQuestion(name);
    res.status(200).json(cardQuestion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getCardByDeckIdHandler(req, res) {
  const { uuid } = req.query;
  try {
    const getCardDeck = await getCardByDeckID(uuid);
    res.send(getCardDeck);
  } catch (error) {
    res.status(404).send(error.message);
  }
}
