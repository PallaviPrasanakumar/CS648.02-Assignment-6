const { MongoClient } = require('mongodb');


const client = new MongoClient(`mongodb+srv://Pallavi:${process.env.MONGO_PASS}@cluster0.w4vug.mongodb.net/PallaviAssignment4?retryWrites=true&w=majority`, {
  useUnifiedTopology: true,
});

let inventory; let
  counter;
client.connect((err, cl) => {
  const db = cl.db();
  inventory = db.collection('inventory');
  counter = db.collection('counter');
});

function getInventory() { return inventory; }
function getCounter() { return counter; }

module.exports = { getCounter, getInventory };