const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 5000;

async function dbConnect() {
  try {
    await mongoose.connect(
      'mongodb+srv://mayhem:qwerty12345@td.zd0th.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
      { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
    );
  } catch (e) {
    console.log(e.message);
    process.exit(1);
  }
}

dbConnect();

app.use('/getinfo', require('./routes/RestPlaceInfos'));

const db = mongoose.connection;
db.once('open', () => {
  console.log('connected');
});

app.listen(PORT, () => {
  console.log(`app listening port ${PORT}`);
});
