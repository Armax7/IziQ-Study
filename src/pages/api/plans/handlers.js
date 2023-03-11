import * as Controllers from "./controllers";

export async function handleGet(req, res) {
  try {
    const response = await Controllers.getPlansFromSb();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export async function handlePost(req, res) {
  const body = req.body;

  try {
    const response = await Controllers.postPlan(body);
    return res.status(201).json({
      message: `Submited on plans: ${JSON.stringify(response)}`,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
