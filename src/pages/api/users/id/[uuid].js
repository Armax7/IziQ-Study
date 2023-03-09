import { getUserDetailById } from "../controllers";

export default async function handler(req, res) {
  const uuid = req.query.uuid;
  try {
    const userDetail = await getUserDetailById(uuid);
    res.send(userDetail);
  } catch (error) {
    res.status(404).send(error.message);
  }
}
