import { getUserDetailByName } from "../controllers";

export default async function handler(req, res) {
    const name = req.query.name;
    try {
      const userDetail = await getUserDetailByName(name);
      res.send(userDetail);
    } catch (error) {
      res.status(404).send(error.message);
    }
  };
