import {getCardByNameQuestionHandler} from "../handlers"

export default async function handler (req, res){
    const {method} = req

    switch (method) {
        case "GET":
            getCardByNameQuestionHandler(req, res);
          break;
        default:
          res.status(400).json({ message: "Invalid request method" });
      }
}