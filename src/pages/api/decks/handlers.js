import {getAllDecks, getDeckByUserId, getDecksByName} from "./controllers"

export async function getAllDecksHandler(req, res) {
    try {
      const decks = await getAllDecks();
      res.status(200).json(decks);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  
  export async function getDecksByNameHandler(req, res) {
    const { name } = req.query;
    try {
      const deck = await getDecksByName(name);
      res.status(201).json(deck);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  
  export async function getDeckByUserIdHandler(req, res){
    const {uuid} = req.query
    try {
      const userDecks = await getDeckByUserId(uuid);
      res.send(userDecks);
    } catch (error) {
      res.status(404).send(error.message);
    }
  }