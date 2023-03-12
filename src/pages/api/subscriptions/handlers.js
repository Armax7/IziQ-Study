import * as Controllers from "./controllers";

export async function handleGet(req, res) {
  try {
    const response = await Controllers.getSubscriptionsFromSb();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message }).end();
  }
}

export async function handleGetById(req, res) {
    const { id } = req.query;
  
    try {
      const response = await Controllers.getSubscriptionById(id);
      if (JSON.stringify(response) === "[]") {
        return res.status(404).json([{ error: "Subscription ID not found" }]);
      }
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
