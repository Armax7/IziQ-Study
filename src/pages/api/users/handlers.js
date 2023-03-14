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

export async function updateUserDetailHandler(req, res) {
  const body = req.body
  try {
    const updateUser = await Controllers.modificatedUser(body)
    res.status(200).json(updateUser)
  } catch (error) {
    res.status(500).json({ error: error.message });    
  }
}

export async function deleteUserDetailHandler(req, res) {
  const body = req.body
  try {
    const response = await Controllers.removeUserById(body)
    return res.status(200).json({message:"User successfully removed"})
  } catch (error) {
    return res.status(500).json({ error: error.message });    
  }
}

export async function createUserDetailHandler(req, res) {}


