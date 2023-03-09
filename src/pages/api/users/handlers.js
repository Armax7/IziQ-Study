import { getAllUsersDetails  } from "./controllers";

export async function getAllFromUserDetailHandler(req, res) {
  try {
    const user = await getAllUsersDetails();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getUserDetailByNameHandler(req, res) {
  const { name } = req.query;
  try {
    const user = await getUserDetailByName(name);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


export async function createUserDetail(req, res) {}

export async function updateUserDetail(req, res) {}

export async function deleteUserDetail(req, res) {}
