const express = require('express')
const userSchema = require('../models/user')

const router = express.Router()

//crear usuario
router.post("/users", async (req, res) => {
    try {
      const user = new userSchema(req.body);
      console.log(user);
      const data = await user.save();
      res.json(data);
    } catch (error) {
      console.error("Error al guardar el usuario:", error);
      res.status(500).json({ message: "Error al guardar el usuario" });
    }
  });
  
  
module.exports = router
