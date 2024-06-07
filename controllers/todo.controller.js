const Todo = require("../models/Todo")

exports.getAllTodos = async (req, res) => {
    const result = await Todo.find()
    res.json({ messege: "todo fetch success", result })
}

exports.addTodos = async (req, res) => {
    await Todo.create(req.body)
    res.json({ messege: "todo add success" })
}

exports.updateTodos = async (req, res) => {
    await Todo.findByIdAndUpdate(req.params.id, req.body)
    res.json({ messege: "todo update success" })
}

exports.deleteTodos = async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id)
    res.json({ messege: "todo delete success" })
}