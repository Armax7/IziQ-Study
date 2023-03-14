import * as Controllers from "./controllers";

export async function handleGet(req, res) {
  try {
    const user = await Controllers.getAllUsersDetails();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function handleGetByName(req, res) {
  const { name } = req.query;
  try {
    const user = await Controllers.getUserDetailByName(name);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function handleGetByUserUuid(req, res){
  const {uuid} = req.query
  try {
    const userDetail = await Controllers.getUserDetailById(uuid);
    res.send(userDetail);
  } catch (error) {
    res.status(404).send(error.message);
  }
}

export async function handlePut(req, res) {
  const body = req.body
  try {
    const updateUser = await Controllers.updateUserDetails(body)
    res.status(200).json(updateUser)
  } catch (error) {
    res.status(500).json({ error: error.message });    
  }
}

export async function handlePost(req, res) {
  const body = req.body
  try {
    const userDetails = await Controllers.postUserDetails(body)
    res.status(200).json(userDetails)
  } catch (error) {
    res.status(500).json({ error: error.message });    
  }
}


