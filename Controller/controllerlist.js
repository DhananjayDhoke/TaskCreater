import List from "../Model/list.js";

export const createList = async (req, res) => {
  try {
    const { title } = req.body;
    const newList = await List.create({ title });
    res.status(201).json(newList);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create list.' });
  }
};

export const getLists = async (req, res) => {
  try {
    const lists = await List.find();
    res.json(lists);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch lists.' });
  }
};