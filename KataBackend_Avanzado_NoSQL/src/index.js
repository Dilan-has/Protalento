const express = require('express')
const mongoose = require('mongoose')
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require('mongodb')
const userRoutes = require('./routes/user')

const app = express()
const port = process.env.PORT || 9000;
const uri = 'mongodb+srv://admin:admin2208@cluster0.lezqi1e.mongodb.net/Cine?retryWrites=true&w=majority'

//*middlware
app.use(express.json())
app.use("/api", userRoutes);

//*rutas
app.get('/', (req, res) => {
    res.send('API :D')
})

//*conexion mongo

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000, // Aumenta el tiempo de espera
};

mongoose.connect(uri, options)
  .then(() => {
    console.log('Conexión exitosa');
  })
  .catch((err) => {
    console.error('Error en la conexión:', err);
  });

app.listen(port, () => console.log('server listening on port ', port))