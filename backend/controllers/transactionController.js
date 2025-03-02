import Transaction from "../models/Transaction.js";

export const addTransaction = async (req, res) => {
  try {
    const { userId, description, amount, type } = req.body;
    const transaction = new Transaction({ userId, description, amount, type });
    await transaction.save();
    res.json({ message: "Transaction added successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getTransactions = async (req, res) => {
  try {
    const { userId } = req.query;
    const transactions = await Transaction.find({ userId });
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteTransaction = async (req, res) => {
  try {
    await Transaction.findByIdAndDelete(req.params.id);
    res.json({ message: "Transaction deleted successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
