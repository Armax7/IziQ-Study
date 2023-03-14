import * as Controllers from "./controllers";

export async function getAllFromUserDetailHandler(req, res) {
  try {
    const user = await Controllers.getAllUsersDetails();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getUserDetailByNameHandler(req, res) {
  const { name } = req.query;
  try {
    const user = await Controllers.getUserDetailByName(name);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getUserDetailByIdHandler(req, res){
  const {uuid} = req.query
  try {
    const userDetail = await Controllers.getUserDetailById(uuid);
    res.send(userDetail);
  } catch (error) {
    res.status(404).send(error.message);
  }
}


export async function createUserDetailHandler(req, res) {}

export async function updateUserDetailHandler(req, res) {}

export async function deleteUserDetailHandler(req, res) {}
