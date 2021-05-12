import cors from 'cors';

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 5000;
require('dotenv').config();

async function dbConnect() {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_LOGIN}:${process.env.DB_PASS}@td.zd0th.mongodb.net/app?retryWrites=true&w=majority`,
      { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
    );
  } catch (e) {
    console.log(e.message);
    process.exit(1);
  }
}

dbConnect();
app.use(cors());
app.use('/api/getinfo', require('./routes/RestPlaceInfo'));
app.use('/api/resort', require('./routes/Resort.ts'));

const db = mongoose.connection;
db.once('open', () => {
  console.log('connected');
});

app.listen(PORT, () => {
  console.log(`app listening port ${PORT}`);
});
